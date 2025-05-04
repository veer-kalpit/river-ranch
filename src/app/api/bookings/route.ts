import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextRequest, NextResponse } from "next/server";

interface BookingData {
  fullname: string;
  email: string;
  phone: string;
  checkIn: string;
  guests: number;
  slot: "morning" | "evening";
}

const validateBooking = (body: BookingData) => {
  if (
    !body.fullname ||
    !body.email ||
    !body.phone ||
    !body.checkIn ||
    !body.guests ||
    !body.slot
  ) {
    throw new Error(
      "Missing required fields: fullname, email, phone, checkIn, guests, slot."
    );
  }

  if (!["morning", "evening"].includes(body.slot.toLowerCase())) {
    throw new Error("Invalid slot. Must be 'morning' or 'evening'.");
  }

  const checkInDate = new Date(body.checkIn);

  if (isNaN(checkInDate.getTime())) {
    throw new Error("Invalid check-in date format.");
  }

 
};

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ checkIn: 1 });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
    console.error("Error fetching bookings:", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    console.log("Incoming booking:", body);

    validateBooking(body);

    const checkInDate = new Date(body.checkIn);
    const startOfDay = new Date(checkInDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(checkInDate.setHours(23, 59, 59, 999));

    // Get bookings on the same day
    const existingBookings = await Booking.find({
      checkIn: { $gte: startOfDay, $lte: endOfDay },
    });

    const slotsBooked = existingBookings.map((b: { slot: string }) => b.slot);

    if (slotsBooked.includes("morning") && slotsBooked.includes("evening")) {
      return NextResponse.json(
        {
          error:
            "Both morning and evening slots are already booked for this date.",
        },
        { status: 400 }
      );
    }

    if (slotsBooked.includes(body.slot.toLowerCase())) {
      return NextResponse.json(
        { error: `The ${body.slot} slot is already booked for this date.` },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      ...body,
      slot: body.slot.toLowerCase(),
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}


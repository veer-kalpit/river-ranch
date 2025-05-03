import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextRequest, NextResponse } from "next/server";

interface BookingData {
  fullname: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  slot: "morning" | "evening";
}

const validateBooking = (body: BookingData) => {
  if (
    !body.fullname ||
    !body.email ||
    !body.phone ||
    !body.checkIn ||
    !body.checkOut ||
    !body.guests ||
    !body.slot
  ) {
    throw new Error(
      "Missing required fields: fullname, email, phone, checkIn, checkOut, guests, slot."
    );
  }

  if (!["morning", "evening"].includes(body.slot.toLowerCase())) {
    throw new Error("Invalid slot. Must be 'morning' or 'evening'.");
  }

  const checkInDate = new Date(body.checkIn);
  const checkOutDate = new Date(body.checkOut);

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    throw new Error("Invalid check-in or check-out date format.");
  }

  if (checkInDate >= checkOutDate) {
    throw new Error("Check-out date must be after check-in date.");
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

    const booking = await Booking.create({
      ...body,
      slot: body.slot.toLowerCase(), // normalize
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

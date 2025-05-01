import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextRequest, NextResponse } from "next/server";

// Helper function to validate the booking data
interface BookingData {
  fullname: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
}

const validateBooking = (body: BookingData) => {
  if (
    !body.fullname ||
    !body.email ||
    !body.phone ||
    !body.date ||
    !body.guests
  ) {
    throw new Error(
      "Missing required fields: fullname, email, phone, date, guests."
    );
  }
};

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find();
    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    console.log("Incoming booking:", body); // ✅ Add this

    // Validate incoming booking data
    validateBooking(body);

    // Create the booking
    const booking = await Booking.create(body);
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error); // ✅ Full error log
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}


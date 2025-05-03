import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  try {
    const updated = await Booking.findByIdAndUpdate(params.id, body, {
      new: true, // Return the updated document
    });

    if (!updated) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const deleted = await Booking.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}

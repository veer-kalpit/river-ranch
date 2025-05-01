import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const updated = await Booking.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Booking.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}

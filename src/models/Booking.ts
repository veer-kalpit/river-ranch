// models/Booking.ts
import mongoose, { Schema, models } from "mongoose";

const BookingSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
  },
  { timestamps: true }
);

export const Booking =
  models.Booking || mongoose.model("Booking", BookingSchema);

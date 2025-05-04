import mongoose, { Schema, models } from "mongoose";

const BookingSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number, required: true },
    slot: {
      type: String,
      enum: ["morning", "evening"], // ✅ lowercase to match input
      required: true,
      set: (v: string) => v.toLowerCase(), // normalize input
    },
    bookingDate: {
      type: Date,
      default: Date.now, 
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const Booking =
  models.Booking || mongoose.model("Booking", BookingSchema);

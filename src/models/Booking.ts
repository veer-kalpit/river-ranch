import mongoose, { Schema, models } from "mongoose";

const BookingSchema = new Schema(
  {
    fullname: { type: String, required: true },
    phone: { type: String, required: true },
    checkIn: { type: Date, required: true },
    guests: { type: String, required: true },
    slot: {
      type: String,
      enum: [
        "09:00 am - 12:00 pm",
        "12:00 pm - 03:00 pm",
        "03:00 pm - 06:00 pm",
        "06:00 pm - 09:00 pm",
      ],
      required: true,
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

// Optional index for faster availability lookup
BookingSchema.index({ checkIn: 1, slot: 1 });

export const Booking =
  models.Booking || mongoose.model("Booking", BookingSchema);

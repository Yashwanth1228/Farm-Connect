import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },

    name: { type: String, required: true },
    images: { type: String, required: true },

    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },

    price: { type: Number, required: true },
    days: { type: Number, required: true },
    totalprice: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    tax: { type: Number, required: true },

    status: {
      type: String,
      default: "upcoming",
      enum: ["upcoming", "active", "completed"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
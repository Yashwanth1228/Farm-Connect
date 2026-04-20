import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userEmail:String ,
   items: [
    {
      id: Number,
      name: String,
      price: Number,
      startDate: String,
      endDate: String,
      days: Number,
      totalPrice: Number,
    },
  ],

  subtotal: Number,
  tax: Number,
  grandTotal: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Booking || mongoose.model('Booking ',bookingSchema)
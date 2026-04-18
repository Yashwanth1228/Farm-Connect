import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    userId : {type : String , required : true},
    name : {type: String, required : true},
    images : { type : String , required : true},
    start_date : {type : Date , required : true},
    end_date : {type : Date , required : true},
    price : {type : Number , required : true},
    days : {type :Number , required : true},
    totalprice : {type : Number , required : true}
})

const BookingModel = mongoose.models.Booking || mongoose.model("Booking",BookingSchema);

export default BookingModel;
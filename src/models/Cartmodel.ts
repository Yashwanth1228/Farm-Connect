import mongoose from "mongoose";

const cartschema = new mongoose.Schema({
    productid : {type : String , required : true},
    name : {type : String , required : true},
    image : {type : String , required : true},
    start_date : {type : Date , required : true},
    end_date : {type : Date , required : true},
    price : {type : Number , required : true},
    quantity : {type : Number , required : true},
    days : {type :Number , required : true},
    totalprice : {type : Number , required : true}
})

const cartmodel = mongoose.models.cart || mongoose.model("cart" , cartschema)

export default cartmodel;
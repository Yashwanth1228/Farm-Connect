import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
    name : {type: String, required : true},
    images : { type : [String] , required : true},
    type : { type : String , required : true},
    available : { type : Boolean },
    quantity : { type : Number , required : true },
    price : {type: Number, required : true},
    location : { type : String, required : true},
    description : {type: String, required : true},
    enginepower : {type: String, required : true},
    wheels : {type: String, required : true},
    fuel_type : {type: String, required : true},
    Transmission : {type: String, required : true},
    Hydraulic_Flow : {type: String, required : true},
    weight : {type: String, required : true},
})

const EquipmentModel = mongoose.models.equipment || mongoose.model("equipment",EquipmentSchema);

export default EquipmentModel;
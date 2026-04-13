import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  subject:{type:String,required:true},
  message:{type:String,required:true}
},
  {
    timestamps: true,
    collection: "form",
  })

export default mongoose.models.Form || mongoose.model('form',formSchema)
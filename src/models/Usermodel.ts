import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name : { type: String , required : true },
    email : { type: String , required : true , unique : true},
    password : { type: String , required : true},
    profilePic: { type: String, default: "" },
    role : { type: String , default : 'user'},

},

{
    timestamps: true,
    collection: "users",
  }

)


const Usermodel = mongoose.models.users || mongoose.model("users", userschema);


export default Usermodel;
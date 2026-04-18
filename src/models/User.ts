import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:String,
  email:{type:String,unique:true},
  password:String,
  profilePic: {
    type: String,
    default: ""
  }
})

export default mongoose.models.User || mongoose.model('users',userSchema)
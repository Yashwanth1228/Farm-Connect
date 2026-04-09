import type {NextApiRequest , NextApiResponse} from 'next'
import { connectDB } from '@/lib/db'
import User from '@/models/User'

export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse
){
  if(req.method !== "POST"){
    return res.status(405).json({message:"Method not allowed"});
  }

  try{
    await connectDB();

    const{name,email,password}= req.body;

    const existingUser = await User.findOne({email})

    if(existingUser){
      return res.status(400).json({message:"User already exists"})
    }

    const user = await User.create({
      name,email,password
    });

    res.status(201).json({message:"User Created",user})
  }
  catch(error){
    res.status(500).json({message:"Server error",error})
  }
}


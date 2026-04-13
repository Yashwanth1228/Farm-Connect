import { NextApiRequest,NextApiResponse } from "next";
import {connectDB} from '@/lib/db'
import Form from '@/models/Form'

export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse
){
  if(req.method !=="POST"){
    res.status(405).json({message:"Method not allowed"})
  }
  try{
    await connectDB();

    const{name,email,subject,message} = req.body;

    if(!name || !email || !subject || !message){
      res.status(400).json({message:"Please fill all the details "})
  }

  const newForm = await Form.create({
    name,email,subject,message
  })
  res.status(201).json({message:"Form submitted successfully",
    data:newForm,
  })
}catch(error){
  res.status(500).json({message:"Server error",error})
}
}
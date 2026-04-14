import mongoose from "mongoose";

const connectDB = async () => {

    try{
      console.log("mongodb connection string", process.env.MONGODB_URI);
        const mongodb = await mongoose.connect(`${process.env.MONGODB_URI}/farm_connect`);
        
        if(mongodb){
            console.log("mongodb connected succesfully")
        }

    } catch(error ) {
        console.log("error in the mongodb connection string", error);
    }
}

export default connectDB;
import mongoose from "mongoose";

const  bookSchema = new mongoose.Schema({
    imgLink:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    authName:{
        type:String,
        required:true,
    },
    pubName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    buyLink:{
        type:String,
        required:false,
    }   
})

export default mongoose.model("Book",bookSchema);
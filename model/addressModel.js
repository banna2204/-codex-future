import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  address:{
    type:String,
    required:true,
    trim:true
  }
})

export default mongoose.model("Address",addressSchema);
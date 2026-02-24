import mongoose from "mongoose";

const placedSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  roll:{
    type:String,
    required:true
  },
  company:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
})

export default mongoose.model('Placed',placedSchema);
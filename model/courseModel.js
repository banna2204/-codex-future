import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title:String,
  rating:Number,
  students:String,
  duration:String,
  // price:String,
  detail:String,
  image:String
});

export default mongoose.model("Course",courseSchema);
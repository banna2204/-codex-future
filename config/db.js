import mongoose from 'mongoose'

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected!!');
  } catch (error) {
    console.log('mongodb error!!',error);
  }
}


export default main;


import Placed from '../model/placedModel.js'
import cloudinary from '../config/cloudinary.js'

export const addStudent = async (req,res) => {
  try {
    const {name, salary, roll, company} = req.body;

    if(!name || !salary || !roll || !company) {
      return res.json({message:'Please complete fields!!'});
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path,{
      folder:'placeds'
    })

    const place = new Placed({
      name,
      salary,
      roll,
      company,
      image:result.secure_url
    })

    await place.save();

    res.json({message:'Student add succesfully!!'})
  } catch (error) {
    res.json({message:"Something went wrong!!"})
  }
}

export const getStudent = async (req,res) => {
  try {
    const placedStudents = await Placed.find();

    res.json({data:placedStudents});
  } catch (error) {
    res.json({message:"Something went wrong!!"})
  }
}
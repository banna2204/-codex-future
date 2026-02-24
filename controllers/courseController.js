import Course from "../model/courseModel.js";
import cloudinary from "../config/cloudinary.js";

export const getCourse = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    const skip = (page - 1) * limit;

    const courses = await Course.find()
      .skip(skip)
      .limit(limit);

    const total = await Course.countDocuments();

    res.json({
      courses,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req,res) => {
  try {

    const { title, rating, students, duration, detail } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "courses",
    });

    const course = new Course({
      title,
      rating,
      students,
      duration,
      detail,
      image: result.secure_url,
    })
    await course.save();
    res.json({message:'Course added succesfully!!'});

  } catch (error) {
    console.log('controller error!!',error);
  }
}

export const deleteCourse = async (req,res)=> {
  try {
    const {id} = req.params;
    await Course.findByIdAndDelete(id);
    res.json({message:"Course delete successfully!!"});
  } catch (error) {
    console.log('controller error!!',error);
  }
}


export const updateCourse = async (req, res) => {
  try {
    const { title, rating, students, duration, detail } = req.body;

    const updateData = {
      title,
      rating,
      students,
      duration,
      detail,
    };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "courses",
      });

      updateData.image = result.secure_url;
    }

    const updatedCours = await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      message: "Course updated successfully",
      updatedCours,
    });

  } catch (error) {
    console.log("update controller error", error);
    res.status(500).json({ message: "Update failed" });
  }
};

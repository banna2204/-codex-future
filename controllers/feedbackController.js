import Feedback from "../model/feedbackModel.js";

export const create = async (req, res) => {
  try {
    const { name, feedback } = req.body;

    if (!name || !feedback) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Feedback.create({
      name,
      feedback,
    });

    res.status(201).json({
      message: "Feedback created successfully!",
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json({
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export const deleteFeedback = async (req,res) => {
  try {
    const {id} = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({
      message:'Feedback deleted successfully!!'
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
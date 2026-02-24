import express from 'express'
import { createCourse, deleteCourse, getCourse, updateCourse } from '../controllers/courseController.js';
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get('/',getCourse);
router.post('/',upload.single("image"),createCourse);
router.delete('/delete/:id',deleteCourse);
router.put('/update/:id',upload.single("image"),updateCourse)

export default router;
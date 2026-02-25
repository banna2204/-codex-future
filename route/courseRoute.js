import express from 'express'
import { createCourse, deleteCourse, getCourse, getCourses, updateCourse } from '../controllers/courseController.js';
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get('/',getCourse);
router.get('/getCourse',getCourses);
router.post('/',upload.single("image"),createCourse);
router.delete('/delete/:id',deleteCourse);
router.put('/update/:id',upload.single("image"),updateCourse)

export default router;
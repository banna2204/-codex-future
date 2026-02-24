import express from 'express';
import { addStudent, getStudent } from '../controllers/placedController.js';
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post('/',upload.single("image"),addStudent);
router.get('/',getStudent);

export default router;
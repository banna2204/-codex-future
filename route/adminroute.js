import express from 'express';
import { admin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/adminLogin',admin);

export default router;
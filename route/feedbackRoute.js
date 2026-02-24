import express from 'express';
import { create, deleteFeedback, getAllFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/',create);
router.get('/',getAllFeedback);
router.delete('/delete/:id',deleteFeedback);

export default router;
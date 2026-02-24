import express from 'express';
import { createAddress, deleteAddress, getAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/createAddress',createAddress);
router.get('/',getAddress);
router.delete('/delete/:id',deleteAddress);

export default router;
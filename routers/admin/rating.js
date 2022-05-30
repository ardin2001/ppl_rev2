import express from 'express';
import rating_admin from '../../controllers/rating_admin.js';
const router = express.Router();

//read produk
router.get('/',rating_admin.read)
router.get('/produk/:id',rating_admin.detail) 

export default router;
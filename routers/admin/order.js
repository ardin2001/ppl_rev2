import express from 'express';
import order_admin from '../../controllers/order_admin.js';
const router = express.Router();

router.get('/',order_admin.order);

export default router;
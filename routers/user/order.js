import express from 'express';
import order_user from '../../controllers/order_user.js';
const router = express.Router();

router.get('/:id',order_user.order);
router.get('/order/:id',order_user.create);
router.get('/image/:id',order_user.image);

export default router;
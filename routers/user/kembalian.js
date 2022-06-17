import express from 'express';
import kembalian_user from '../../controllers/kembalian_user.js';
const router = express.Router();

router.get('/:id',kembalian_user.read);
router.get('/image/:id',kembalian_user.image);

export default router;
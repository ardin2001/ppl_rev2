import express from 'express';
import profile_user from '../../controllers/profile_user.js';
const router = express.Router();

router.get('/:id',profile_user.read);
//update produk
router.get('/edit/:id',profile_user.update)

export default router;
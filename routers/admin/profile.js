import express from 'express';
import profile_admin from '../../controllers/profile_admin.js'
const router = express.Router();

router.get('/:id',profile_admin.read);
//update produk
router.get('/edit/:id',profile_admin.update)

export default router;
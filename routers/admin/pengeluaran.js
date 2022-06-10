import express from 'express';
import pengeluaran_admin from '../../controllers/pengeluaran_admin.js';
const router = express.Router();

router.get('/',pengeluaran_admin.read);
router.get('/create',pengeluaran_admin.create);
router.get('/edit/:id',pengeluaran_admin.edit);

export default router;
import express from 'express';
import pemasukan_admin from '../../controllers/pemasukan_admin.js';
const router = express.Router();

router.get('/',pemasukan_admin.read);
router.get('/pproduk',pemasukan_admin.read_produk);
router.get('/create/:id',pemasukan_admin.create)
router.get('/edit/:id',pemasukan_admin.update)

export default router;
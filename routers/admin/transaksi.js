import express from 'express';
import transaksi_admin from '../../controllers/transaksi_admin.js';
const router = express.Router();

router.get('/',transaksi_admin.transaksi)

export default router;
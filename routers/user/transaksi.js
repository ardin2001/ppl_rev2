import express from 'express';
import transaksi_user from "../../controllers/transaksi_user.js";
const router = express.Router();

router.get('/:id',transaksi_user.read)

export default router;
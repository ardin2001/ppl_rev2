import express from 'express';
import produk_user from '../../controllers/produk_user.js'
const router = express.Router();

router.get('/',produk_user.produk)

export default router;
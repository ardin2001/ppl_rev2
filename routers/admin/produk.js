import express from 'express';
import produk_admin from '../../controllers/produk_admin.js';
const router = express.Router();

//read produk
router.get('/',produk_admin.read) 
//create produk
router.get('/create',produk_admin.create);   

//update produk
router.get('/edit/:id',produk_admin.update)
export default router;
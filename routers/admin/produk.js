import express from 'express';
import Produk from '../../models/produk.js';
import admin_produk from '../../controllers/produk_admin.js';
const router = express.Router();

//read produk
router.get('/',admin_produk.read) 
//create produk
router.get('/createproduk',admin_produk.create);   

//update produk
router.get('/edit/:id',admin_produk.update)
export default router;
import express from 'express';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import mc from '../controllers/user.js';
import user_produk_router from './user/produk.js';
import user_order_router from './user/order.js';

router.get('/login', mc.login);
router.get('/logout', mc.logout);
router.post('/login', mc.auth);

router.use('/produk',user_produk_router);
router.use('/order/:id',user_order_router);
router.use('/create',user_order_router);

router.post('/api/order',(req,res) =>{
    Order.create({
        id_barang : req.body.id_barang,
        id_user : req.body.id_user,
        jumlah : req.body.jumlah,
        total : req.body.jumlah*req.body.harga,
        info : req.body.info
    }).then((result) => res.json(result));
})

export default router;
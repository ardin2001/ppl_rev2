import express from 'express';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import User from '../models/user.js';
import mc from '../controllers/user.js';
import user_produk_router from './user/produk.js';
import user_order_router from './user/order.js';
import user_transaksi_router from './user/transaksi.js';
import mysql2 from 'mysql2';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

router.get('/login', mc.login);
router.get('/logout', mc.logout);
router.post('/login', mc.auth);

router.use('/produk',user_produk_router);
router.use('/order',user_order_router);
router.use('/create',user_order_router);
router.use('/transaksi',user_transaksi_router);

// ======= api user ========== //

//=== api register ===//
router.post('/api/register',(req,res) =>{
    User.create({
        username : req.body.username,
        password : req.body.password,
        nama_pembeli : req.body.lengkap,
        no_telp : req.body.telp,
        email : req.body.email,
        alamat : req.body.alamat
    }).then((result) => res.redirect('/user/login'));
})
//=== api order ===//
router.post('/api/order',(req,res) =>{
    Order.create({
        id_barang : req.body.id_barang,
        id_user : req.body.id_user,
        jumlah : req.body.jumlah,
        total : req.body.jumlah*req.body.harga,
        info : req.body.info
    }).then((result) => res.json(result));
})
//=== api order ===//
router.get('/api/order/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.redirect(`/user/produk`)
    });
})

export default router;
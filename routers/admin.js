import express from 'express';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import Transaksi from '../models/transaksi.js';
import Admin from '../models/admin.js';
import admin_produk_router from '../routers/admin/produk.js';
import admin_order_router from '../routers/admin/order.js';
import admin_transaksi_router from '../routers/admin/transaksi.js';
import admin_dashboard_router from '../routers/admin/dashboard.js';
import admin_user_router from './admin/user.js';
import ac from '../controllers/admin.js';

router.get('/login', ac.login);
router.get('/logout', ac.logout);
router.post('/login', ac.auth);

router.use('/produk',admin_produk_router);
router.use('/order',admin_order_router);
router.use('/transaksi',admin_transaksi_router);
router.use('/dashboard',admin_dashboard_router);
router.use('/user',admin_user_router);


// ======= api admin ========== //
router.post('/api/register',(req,res) =>{
    Admin.create({
        username : req.body.username,
        password : req.body.password,
        nama_admin : req.body.lengkap,
        no_telp : req.body.telp,
        alamat : req.body.alamat
    }).then((result) => res.redirect('/admin/login'));
})
router.get('/api/produks',(req,res) =>{
    Produk.findAll().then((result) =>{
        res.json(result)
    })    
})
router.post('/api/produk',(req,res) =>{
    Produk.create({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.body.gambar
    }).then((result) => res.json(result));
})
router.put('/api/produk/:id',(req,res) =>{
    Produk.update({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.body.gambar
    },{where :{id_barang : req.params.id}}
    ).then(result =>{
        res.json(result)
    })
})
router.delete('/api/produk/:id',(req,res) =>{
    Produk.destroy({where:{id_barang : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})
router.delete('/api/order/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})
router.post('/api/transaksi',(req,res) =>{
    Transaksi.create({
        id_barang : req.body.id_barang,
        id_user : req.body.id_user,
        jumlah : req.body.jumlah,
        total : req.body.jumlah*req.body.harga,
        info : req.body.info
    }).then((result) => res.json(result));
})

export default router;
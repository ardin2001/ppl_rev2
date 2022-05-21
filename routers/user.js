import express from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import User from '../models/user.js';
import mc from '../controllers/user.js';
import user_produk_router from './user/produk.js';
import user_order_router from './user/order.js';
import user_transaksi_router from './user/transaksi.js';
import user_profile_router from './user/profile.js';
import mysql2 from 'mysql2';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});
const uploadFolder ='C:/Users/ardin/Desktop/ppl2/views/img';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage });

router.get('/login', mc.login);
router.get('/logout', mc.logout);
router.post('/login', mc.auth);

router.use('/produk',user_produk_router);
router.use('/order',user_order_router);
router.use('/create',user_order_router);
router.use('/transaksi',user_transaksi_router);
router.use('/profile',user_profile_router);

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
//=== api profile ===//
router.post('/api/profile/edit/:id',(req,res) =>{
    User.update({
        username : req.body.username,
        password : req.body.password,
        nama_admin : req.body.nama,
        no_telp : req.body.telp,
        email : req.body.email,
        alamat : req.body.alamat
    },{where :{id_user : req.params.id}}
    ).then(result => res.redirect(`/user/profile/${req.params.id}`));
})
//=== api order ===//
router.post('/api/order/:idbarang/:iduser',upload.single('gambar'),(req,res) =>{
    Order.create({
        id_barang : req.params.idbarang,
        id_user : req.params.iduser,
        jumlah : req.body.jumlah,
        info : req.file.filename
    }).then((result) => res.redirect(`/user/produk`));
})
//=== api order ===//
router.post('/api/order/edit/:idbarang/:iduser/:idorder',upload.single('gambar'),(req,res) =>{
    Order.update({
        id_barang : req.params.idbarang,
        id_user : req.params.iduser,
        jumlah : req.body.jumlah,
        info : req.file.filename
    },{where :{id_order : req.params.idorder}}
    ).then((result) => res.redirect(`/user/produk`));
})
//=== api order ===//
router.get('/api/order/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.redirect(`/user/produk`)
    });
})

export default router;
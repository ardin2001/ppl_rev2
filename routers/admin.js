import express from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import Transaksi from '../models/transaksi.js';
import Admin from '../models/admin.js';
import Kembalian from '../models/kembalian.js';
import Pemasukan from '../models/pemasukan.js';
import Pengeluaran from '../models/pengeluaran.js';
import admin_produk_router from '../routers/admin/produk.js';
import admin_order_router from '../routers/admin/order.js';
import admin_transaksi_router from '../routers/admin/transaksi.js';
import admin_dashboard_router from '../routers/admin/dashboard.js';
import admin_user_router from './admin/user.js';
import admin_profile_router from './admin/profile.js';
import admin_rating_router from './admin/rating.js';
import admin_kembalian_router from './admin/kembalian.js';
import admin_pemasukan_router from './admin/pemasukan.js';
import admin_pengeluaran_router from './admin/pengeluaran.js';
import ac from '../controllers/admin.js';

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

router.get('/login', ac.login);
router.get('/logout', ac.logout);
router.post('/login', ac.auth);

router.use('/produk',admin_produk_router);
router.use('/order',admin_order_router);
router.use('/transaksi',admin_transaksi_router);
router.use('/dashboard',admin_dashboard_router);
router.use('/user',admin_user_router);
router.use('/profile',admin_profile_router);
router.use('/ulasan',admin_rating_router);
router.use('/kembalian',admin_kembalian_router);
router.use('/pemasukan',admin_pemasukan_router);
router.use('/pengeluaran',admin_pengeluaran_router);

// ======= api admin ========== //

//=== api register ===//
router.post('/api/register',(req,res) =>{
    Admin.create({
        username : req.body.username,
        password : req.body.password,
        nama_admin : req.body.lengkap,
        no_telp : req.body.telp,
        alamat : req.body.alamat
    }).then((result) => res.redirect('/admin/login'));
})
//=== api profile ===//
router.post('/api/profile/edit/:id',(req,res) =>{
    Admin.update({
        username : req.body.username,
        password : req.body.password,
        nama_admin : req.body.nama,
        no_telp : req.body.telp,
        alamat : req.body.alamat
    },{where :{id_admin : req.params.id}}
    ).then(result => res.redirect(`/admin/profile/${req.params.id}`));
})
//=== api produk ===//
router.get('/api/produks',(req,res) =>{
    Produk.findAll().then((result) =>{
        res.json(result)
    })    
})
router.post('/api/produk',upload.single('gambar'),(req,res) =>{
    Produk.create({
        nama_barang : req.body.barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        status : req.body.status,
        gambar : req.file.filename
    }).then((result) => res.redirect('/admin/produk'));
})
router.post('/api/produk/edit/:id',upload.single('gambar'),(req,res) =>{
    Produk.update({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.file.filename,
        status : req.body.status
    },{where :{id_barang : req.params.id}}
    ).then(result =>{
        res.redirect('/admin/produk')
    })
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
router.get('/api/produk/delete/:id',(req,res) =>{
    Produk.destroy({where:{id_barang : req.params.id}}
    ).then(result => {
        res.redirect('/admin/produk')
    });
})
router.delete('/api/produk/:id',(req,res) =>{
    Produk.destroy({where:{id_barang : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})
//=== api order ===//
router.delete('/api/order/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})
router.post('/api/transaksi/:idorder/:idproduk/:nama/:telp/:alamat/:namabarang/:harga/:jumlah/:info/:gambar',(req,res,next) =>{
    Transaksi.create({
        id_barang : req.params.idproduk,
        nama_pembeli : req.params.nama,
        no_telp :  req.params.telp,
        alamat :  req.params.alamat,
        nama_barang :  req.params.namabarang,
        harga :  req.params.harga,
        jumlah :  req.params.jumlah,
        info :  req.params.info,
        gambar : req.params.gambar
    }),next()
    },(req,res,next) =>{
        Order.destroy({where : {id_order : req.params.idorder}})
        .then(result => res.redirect('/admin/order'))
    }
)

//=== api batak transaksi ===//
router.get('/api/btltransaksi/:iduser/:idbarang/:id_order/:buktitf',(req,res,next) =>{
    Kembalian.create({
        id_user : req.params.iduser,
        id_barang : req.params.idbarang,
        info : req.params.buktitf
    }),next()
    },(req,res,next) =>{
        Order.destroy({where : {id_order : req.params.id_order}})
        .then(result => res.redirect('/admin/order'))
    }
)
router.post('/api/btltransaksi/update/:id',upload.single('gambar'),(req,res) =>{
    Kembalian.update({
        bukti_kembalian : req.file.filename
    },{where :{id_kembalian : req.params.id}}
    ).then(result =>{
        res.redirect('/admin/kembalian')
    })
})

//=== api pemasukan ===//
router.post('/api/pemasukan/create/:nama/:harga',upload.single('info'),(req,res) =>{
    Pemasukan.create({
        nama_pembeli : 'Pembeli Offline',
        no_telp : '000000000000',
        alamat : 'Offline',
        nama_barang : req.params.nama,
        harga : req.params.harga,
        jumlah : req.body.jumlah,
        info : req.file.filename
    }).then(result =>{
        res.redirect('/admin/pemasukan')
    })
})
router.post('/api/pemasukan/update/:id',upload.single('info'),(req,res) =>{
    Pemasukan.update({
        jumlah : req.body.jumlah,
        info : req.file.filename
    },{where :{id_pemasukan : req.params.id}}
    ).then(result =>{
        res.redirect('/admin/pemasukan')
    })
})

//=== api pemasukan ===//
router.post('/api/pengeluaran/create',upload.single('pembayaran'),(req,res) =>{
    Pengeluaran.create({
        nama_penjual : req.body.nama_penjual,
        no_telp : req.body.telp,
        alamat : req.body.alamat,
        nama_barang : req.body.nama_produk,
        harga : req.body.harga,
        jumlah : req.body.jumlah,
        info : req.file.filename
    }).then(result =>{
        res.redirect('/admin/pengeluaran')
    })
})
router.post('/api/pengeluaran/update/:id',upload.single('pembayaran'),(req,res) =>{
    Pengeluaran.update({
        nama_penjual : req.body.nama_penjual,
        no_telp : req.body.telp,
        alamat : req.body.alamat,
        nama_barang : req.body.nama_produk,
        harga : req.body.harga,
        jumlah : req.body.jumlah,
        info : req.file.filename
    },{where : {id_pengeluaran : req.params.id}}
    ).then(result =>{
        res.redirect('/admin/pengeluaran')
    })
})

export default router;
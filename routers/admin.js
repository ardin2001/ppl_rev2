import express from 'express';
const router = express.Router();
import Produk from '../models/produk.js';
import Order from '../models/order.js';
import Transaksi from '../models/transaksi.js';
import admin_produk_router from '../routers/admin/produk.js';
import admin_order_router from '../routers/admin/order.js';
import admin_transaksi_router from '../routers/admin/transaksi.js';

router.get('/',(req,res) =>{
    res.send('admin page');
})
router.use('/produk',admin_produk_router);
router.use('/order',admin_order_router);
router.use('/transaksi',admin_transaksi_router);

//read produk
router.get('/api/produks',(req,res) =>{
    Produk.findAll().then((result) =>{
        res.json(result)
    })    
})
//post product
router.post('/api/produk',(req,res) =>{
    Produk.create({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.body.gambar
    }).then((result) => res.json(result));
})
//update
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
//delete
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
import express from 'express';
const router = express.Router();
import Produk from '../models/produk.js';
import admin_produk_router from '../routers/admin/produk.js';

router.get('/',(req,res) =>{
    res.send('admin page');
})
router.use('/produk',admin_produk_router);
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

export default router;
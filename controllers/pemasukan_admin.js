import mysql2 from 'mysql2';
import Pemasukan from '../models/pemasukan.js';
import Produk from '../models/produk.js';

const read = (req,res) =>{
    Pemasukan.findAll().then((result) =>{
        res.render('admin/pemasukan_view',{Pemasukan:result,admin : req.session.admin || ""})
    })
}
const read_produk = (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('admin/pemasukan_produk',{Produk:result,admin : req.session.admin || ""})
    })
}
const create = (req,res) =>{
    Produk.findOne({where : {id_barang : req.params.id}}).then((result) =>{
        res.render('admin/pemasukan_create',{Produk:result,admin : req.session.admin || ""})
        // res.json(result)
    })
}
const update = (req,res) =>{
    Pemasukan.findOne({where : {id_pemasukan : req.params.id}}).then((result) =>{
        res.render('admin/pemasukan_update',{Pemasukan:result,admin : req.session.admin || ""})
        // res.json(result)
    })
}

export default {read,read_produk,create,update}
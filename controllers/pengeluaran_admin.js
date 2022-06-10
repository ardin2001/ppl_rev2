import Pengeluaran from '../models/pengeluaran.js';
import Pemasukan from '../models/pemasukan.js';
import Produk from '../models/produk.js';

const read = (req,res) =>{
    Pengeluaran.findAll().then((result) =>{
        res.render('admin/pengeluaran_view',{Pengeluaran:result,admin : req.session.admin || ""})
    })
}
const create = (req,res) =>{
    res.render('admin/pengeluaran_create',{admin : req.session.admin || ""})
}
const edit = (req,res) =>{
    Pengeluaran.findOne({where : {id_pengeluaran : req.params.id}}).then((result) =>{
        res.render('admin/pengeluaran_update',{Pengeluaran:result,admin : req.session.admin || ""})
        // res.json(result)
    })
}

export default {read,create,edit}
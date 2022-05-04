import Produk from "../models/produk.js";
const read = (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('admin/produk_view',{Produk:result})
    })
}
const create = (req,res) =>{
    res.render('admin/produk_create');
}
const update = (req,res) =>{
    Produk.findOne({where:{id_barang:req.params.id}}).then(result =>{
        res.render('admin/produk_update',{Produk:result})
    })
}
export default {read,create,update}
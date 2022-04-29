import Produk from "../models/produk.js";
const read = (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('produk-admin-view',{Produk:result})
    })
}
const create = (req,res) =>{
    res.render('produk-admin-create');
}
const update = (req,res) =>{
    Produk.findOne({where:{id_barang:req.params.id}}).then(result =>{
        res.render('produk-admin-update',{Produk:result})
    })
}
export default {read,create,update}
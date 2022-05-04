import Produk from "../models/produk.js";
const produk = (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('user/index',{Produk:result, user : req.session.user || ""})
    })
}

export default {produk}
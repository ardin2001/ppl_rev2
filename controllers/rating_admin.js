import Produk from "../models/produk.js";
import User from "../models/user.js";
import Rating from "../models/rating.js";
const read = (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('admin/rating_view',{Produk:result,admin : req.session.admin || ""})
    })
}
const detail = (req,res) =>{
    Rating.findAll({include : [{model : User},{model : User}],where:{id_barang:req.params.id}}).then((result) =>{
        res.render('admin/ratingdetail_view',{Rating:result,admin : req.session.admin || ""})
    })
}

export default {read,detail}
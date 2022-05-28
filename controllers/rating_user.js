import Rating from "../models/rating.js";
import Transaksi from "../models/transaksi.js";
import User from "../models/user.js";

const read = (req,res) =>{
    Rating.findAll({include : [{model : User},{model : User}],where:{id_barang:req.params.id}}).then((result) =>{
        res.render('user/rating_view',{Rating:result,user : req.session.user || ""})
    })
}
const create = (req,res) =>{
    Transaksi.findOne({where:{id_barang:req.params.id}}).then((result) =>{
        res.render('user/rating_create',{Transaksi:result,user : req.session.user || ""});
    })
}

export default {read,create}
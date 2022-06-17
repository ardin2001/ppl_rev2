import Kembalian from "../models/kembalian.js";
import Produk from "../models/produk.js";
import User from "../models/user.js";
const read = (req,res) =>{
    Kembalian.findAll({include:[{model:Produk},{model:User}],where :{id_user : req.params.id}}).then((result) =>{
        res.render('user/kembalian_view',{Kembalian:result, user : req.session.user || ""})
        // res.json(result)
    })
}
const image = (req,res) =>{
    Kembalian.findOne({where :{id_kembalian : req.params.id}}).then((result) =>{
        res.render('user/kembalian_view_image',{Kembalian:result, user : req.session.user || ""})
        // res.json(result)
    })
}

export default {read,image}
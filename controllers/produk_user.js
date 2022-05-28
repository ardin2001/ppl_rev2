import Produk from "../models/produk.js";
import Rating from "../models/rating.js";
const produk = (req,res) =>{
    Produk.findAll({include:[{model:Rating}],where :{status : 1}}).then((result) =>{
        res.render('user/index',{Produk:result, user : req.session.user || ""})
    })
}

export default {produk}
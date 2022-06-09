import Produk from '../models/produk.js';
import User from '../models/user.js';
import Kembalian from '../models/kembalian.js';

const read = (req,res) =>{
    Kembalian.findAll({include:[{model:User},{model : Produk}]}).then((result) =>{
        res.render('admin/kembalian_view',{Kembalian:result,admin : req.session.admin || ""})
    })   
}
const edit = (req,res) =>{
    Kembalian.findOne({where : {id_kembalian : req.params.id}}).then(result =>{
        res.render('admin/kembalian_update',{Kembalian:result,admin : req.session.admin || ""})
    })
}

export default {read,edit}
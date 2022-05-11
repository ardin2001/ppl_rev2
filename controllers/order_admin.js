import mysql2 from 'mysql2';
import Order from '../models/order.js';
import Produk from '../models/produk.js';
import User from '../models/user.js';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

const order = (req,res) =>{
        Order.findAll({include:[{model:User},{model : Produk}]}).then((result) =>{
        res.render('admin/order_view',{Order:result,admin : req.session.admin || ""})
    })
    
}

export default {order}
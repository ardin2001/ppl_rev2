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
    // const sql = "select o.id_order,o.id_user,o.jumlah,o.info,u.nama_pembeli,u.no_telp,u.alamat,p.id_barang,p.nama_barang,p.harga,o.updatedAt from orders o join produks p on o.id_barang = p.id_barang join users u on o.id_user=u.id_user";
    // const query = conn.query(sql,(err,result) =>{
    //     if(err){
    //         res.end("query is fault");
    //     }else{
    //         // res.json(result);
    //         res.render('admin/order_view',{Order:result,admin : req.session.admin || ""})
            
    //     }
    // });
        Order.findAll({include:[{model:User},{model : Produk}]}).then((result) =>{
        res.render('admin/order_view',{Order:result,admin : req.session.admin || ""})
        // res.json(result)
    })
    
}
// const order = (req,res) =>{
//     Order.findAll().then((result) =>{
//         res.render('admin/order_view',{Order:result,user : req.session.user || ""})
//     })
// }
export default {order}
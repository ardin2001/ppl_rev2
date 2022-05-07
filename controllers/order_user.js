import mysql2 from 'mysql2';
import Produk from '../models/produk.js';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

const order = (req,res) =>{  
    const sql = `select o.id_order,o.id_user,o.jumlah,o.info,u.nama_pembeli,u.no_telp,u.alamat,p.gambar,p.id_barang,p.nama_barang,p.harga,o.updatedAt from orders o join produks p on o.id_barang = p.id_barang join users u on o.id_user=u.id_user where o.id_user=${req.params.id}`;
    const query = conn.query(sql,(err,result) =>{
        if(err){
            res.end("query is fault");
        }else{
            res.render('user/order_view',{Order:result,user : req.session.user || ""})
            
        }
    });
}
const create = (req,res) =>{
    Produk.findOne({where:{id_barang:req.params.id}}).then(result =>{
        res.render('user/orderdetail_create',{Produk : result,user : req.session.user || ""})
    })
}

export default {order,create}
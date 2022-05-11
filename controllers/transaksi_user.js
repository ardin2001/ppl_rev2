import mysql2 from 'mysql2';
import Transaksi from '../models/transaksi.js';
import Produk from '../models/produk.js';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

const read = (req,res) =>{
    Transaksi.findAll({include:[{model : Produk}],where:{nama_pembeli:req.params.id}}).then((result) =>{
        res.render('user/transaksi_view',{Transaksi:result,user : req.session.user || ""})
        // res.json(result)
    })
}

export default {read}
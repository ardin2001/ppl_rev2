import mysql2 from 'mysql2';
import Transaksi from '../models/transaksi.js';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

const transaksi = (req,res) =>{
    Transaksi.findAll().then((result) =>{
        res.render('admin/transaksi_view',{Transaksi:result,admin : req.session.admin || ""})
    })
}

export default {transaksi}
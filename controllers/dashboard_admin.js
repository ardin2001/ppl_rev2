import Produk from "../models/produk.js";
import Order from "../models/order.js";
import Pemasukan from "../models/pemasukan.js";
import Pengeluaran from "../models/pengeluaran.js";
import Transaksi from "../models/transaksi.js";
import User from "../models/user.js";

const read = (req,res) =>{
    Order.findAll({include : [{model : Produk},{model : User}]}).then((result) =>{
        res.render('admin/dashboard',{Produk:result,admin : req.session.admin || ""})
        // res.json(result)
    })
}

export default {read}
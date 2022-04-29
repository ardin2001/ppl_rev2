import express from 'express';
import { sequelize } from './models/model.js';
import session from 'express-session';
import Produk from './models/produk.js';
import User from './models/user.js';
import Order from './models/order.js';
import mc from './controllers/user.js';
import mysql2 from 'mysql2';
import Transaksi from './models/transaksi.js';
import root_router from './routers/root.js';
import admin_router from './routers/admin.js';

const app = express();
const hostname ='127.0.0.1';
const port = 3000;
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

app.use(express.json());
app.use(express.urlencoded());
app.use( express.static( "views" ) );
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : 'ini adalah kode secret',
    resave : false,
    saveUninitialized : true,
    cookie :{
        maxAge : 60*60*1000
    }
}))
app.set('view engine','ejs')
app.use('/',root_router);
app.use('/admin',admin_router);

//update produk
app.get('/getproduk/:id',(req,res) =>{
    Produk.findOne({where:{id_barang:req.params.id}}).then(result =>{
        res.render('orderdetail-user-create',{Produk : result,user : req.session.user || ""})
    })
})
//view-order dan transaksi
app.get('/orderproduk',(req,res) =>{  
    // res.send('login sek bozzz');
    const sql = "select o.id_order,o.id_user,o.jumlah,o.total,o.info,p.id_barang,p.nama_barang,p.harga,o.updatedAt from orders o join produks p on o.id_barang = p.id_barang";
    const query = conn.query(sql,(err,result) =>{
        if(err){
            res.end("query is fault");
        }else{
            // res.json(result);
            res.render('order-admin-view',{Order:result})
            
        }
    });
})
//view-order
app.get('/transaksi',(req,res) =>{  
    // res.send('login sek bozzz');
    const sql = "select t.id_transaksi,t.id_user,t.id_barang,p.nama_barang,p.harga,t.jumlah,t.total,t.info,t.updatedAt from transaksis t join produks p on t.id_barang = p.id_barang";
    const query = conn.query(sql,(err,result) =>{
        if(err){
            res.end("query is fault");
        }else{
            // res.json(result);
            res.render('transaksi-admin-view',{Transaksi:result})
            
        }
    })
})

app.get('/order/user/:id',(req,res) =>{  
    // Order.findAll({where:{id_user:req.params.id}}).then(result =>{
    //     res.render('order-user-view',{Order : result,user : req.session.user || ""})
    // })
    const sql = "select o.id_order,o.id_user,o.jumlah,o.total,o.info,p.id_barang,p.nama_barang,p.harga,o.updatedAt from orders o join produks p on o.id_barang = p.id_barang";
    const query = conn.query(sql,(err,result) =>{
        if(err){
            res.end("query is fault");
        }else{
            // res.json(result);
            res.render('order-user-view',{Order:result,user : req.session.user || ""})
            
        }
    });
})

// operasi crud //
app.get('/user', (req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('main-user',{Produk:result, user : req.session.user || ""})
    })
});

//post transaksi
app.post('/api/transaksi',(req,res) =>{
    Transaksi.create({
        id_barang : req.body.id_barang,
        id_user : req.body.id_user,
        jumlah : req.body.jumlah,
        total : req.body.jumlah*req.body.harga,
        info : req.body.info
    }).then((result) => res.json(result));
})

//post order
app.post('/api/order',(req,res) =>{
    Order.create({
        id_barang : req.body.id_barang,
        id_user : req.body.id_user,
        jumlah : req.body.jumlah,
        total : req.body.jumlah*req.body.harga,
        info : req.body.info
    }).then((result) => res.json(result));
})
//delete order
app.delete('/api/order/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})
//delete
app.delete('/api/transaksi/:id',(req,res) =>{
    Order.destroy({where:{id_order : req.params.id}}
    ).then(result => {
        res.json(result)
    });
})

app.listen(port,() => {
    console.log(`Server running at ${hostname}:${port}`);
});
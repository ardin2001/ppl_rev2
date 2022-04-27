import express from 'express';
import { sequelize } from './models/model.js';
import session from 'express-session';
import Produk from './models/product.js';
import User from './models/user.js';
import Order from './models/order.js';
import mc from './controllers/user.js';
import mysql2 from 'mysql2';
import Transaksi from './models/transaksi.js';

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

app.get('/createtable',(req,res) =>{
    Transaksi.sync();
    res.end('table transaksi berhasil dibuat')
})


app.get('/',(req,res) =>{
    res.send('login dlu');
});

//create produk
app.get('/createproduk',(req,res) =>{
    res.render('produk-admin-create');
});
//read produk
app.get('/viewproduk',(req,res) =>{
    Produk.findAll().then((result) =>{
        res.render('produk-admin-view',{Produk:result})
    })    
})
//update produk
app.get('/edit/:id',(req,res) =>{
    Produk.findOne({where:{id_barang:req.params.id}}).then(result =>{
        res.render('produk-admin-update',{Produk:result})
    })
})
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
//auth-session
app.get('/login', mc.login);
app.get('/logout', mc.logout);
app.post('/login', mc.auth);
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

//post product
app.post('/api/produk',(req,res) =>{
    Produk.create({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.body.gambar
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
//update
app.put('/api/produk/:id',(req,res) =>{
    Produk.update({
        nama_barang : req.body.nama_barang,
        deskripsi : req.body.deskripsi,
        harga : req.body.harga,
        gambar : req.body.gambar
    },{where :{id_barang : req.params.id}}
    ).then(result =>{
        res.json(result)
    })
})
//delete
app.delete('/api/produk/:id',(req,res) =>{
    Produk.destroy({where:{id_barang : req.params.id}}
    ).then(result => {
        res.json(result)
    });
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
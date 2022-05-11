import express from 'express';
import session from 'express-session';
import mysql2 from 'mysql2';
import root_router from './routers/root.js';
import admin_router from './routers/admin.js';
import user_router from './routers/user.js';
import Order from './models/order.js';
import Produk from './models/produk.js';
import Transaksi from './models/transaksi.js';
const app = express();
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
    secret : 'inisecret',
    resave : false,
    saveUninitialized : true
}));
app.set('view engine','ejs')
app.use('/',root_router);
app.use('/admin',admin_router);
app.use('/user',user_router);
app.get('/create',(req,res) =>{
    Transaksi.sync();
    res.end('succes');
})
app.listen(3000,() => {
    console.log(`Server running at 127.0.0.1:3000`);
});
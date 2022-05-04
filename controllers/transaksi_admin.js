import mysql2 from 'mysql2';
const conn = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'toko'
});

const transaksi = (req,res) =>{
    const sql = "select t.id_transaksi,t.id_user,t.id_barang,p.nama_barang,p.harga,t.jumlah,t.total,t.info,t.updatedAt from transaksis t join produks p on t.id_barang = p.id_barang";
    const query = conn.query(sql,(err,result) =>{
        if(err){
            res.end("query is fault");
        }else{
            // res.json(result);
            res.render('admin/transaksi_view',{Transaksi:result})
            
        }
    })
}
export default {transaksi}
import {sequelize,DataTypes} from "./model.js";
import Produk from "./produk.js";
const Transaksi = sequelize.define('transaksi',{
    id_transaksi : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    id_barang : DataTypes.INTEGER,
    nama_pembeli : DataTypes.STRING,
    no_telp : DataTypes.STRING,
    alamat : DataTypes.STRING,
    nama_barang : DataTypes.STRING,
    harga : DataTypes.INTEGER,
    jumlah : DataTypes.INTEGER,
    info : DataTypes.STRING
});

Produk.hasMany(Transaksi,{foreignKey : 'id_barang'});
Transaksi.belongsTo(Produk,{foreignKey : 'id_barang'});
export default Transaksi;
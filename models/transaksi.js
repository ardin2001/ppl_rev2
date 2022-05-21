import {sequelize,DataTypes} from "./model.js";
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

export default Transaksi;
import {sequelize,DataTypes} from "./model.js";
const Pengeluaran = sequelize.define('pengeluaran',{
    id_pengeluaran : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    nama_penjual : DataTypes.STRING,
    no_telp : DataTypes.STRING,
    alamat : DataTypes.STRING,
    nama_barang : DataTypes.STRING,
    harga : DataTypes.INTEGER,
    jumlah : DataTypes.INTEGER,
    info : DataTypes.STRING
});

export default Pengeluaran;
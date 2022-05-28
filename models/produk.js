import {sequelize,DataTypes} from "./model.js";
const Produk = sequelize.define('produk',{
    id_barang : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    nama_barang : DataTypes.STRING,
    deskripsi : DataTypes.STRING,
    harga : DataTypes.INTEGER,
    status : DataTypes.TINYINT,
    gambar : DataTypes.STRING
});
export default Produk;
import {sequelize,DataTypes} from "./model.js";
import Produk from "./product.js";
import User from "./user.js";
const Transaksi = sequelize.define('transaksi',{
    id_transaksi : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    id_barang : DataTypes.INTEGER,
    id_user : DataTypes.INTEGER,
    jumlah : DataTypes.INTEGER,
    total : DataTypes.INTEGER,
    info : DataTypes.STRING
});
Produk.hasMany(Transaksi,{foreignKey : 'id_barang'});
User.hasMany(Transaksi, {foreignKey : 'id_user'});


export default Transaksi;
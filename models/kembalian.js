import {sequelize,DataTypes} from "./model.js";
import Produk from "./produk.js";
import User from "./user.js";
const Kembalian = sequelize.define('kembalian',{
    id_kembalian : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    id_barang : DataTypes.INTEGER,
    id_user : DataTypes.INTEGER,
    info : DataTypes.STRING,
    bukti_kembalian : DataTypes.STRING
});
Produk.hasMany(Kembalian,{foreignKey : 'id_barang'});
Kembalian.belongsTo(Produk,{foreignKey : 'id_barang'});
User.hasMany(Kembalian, {foreignKey : 'id_user'});
Kembalian.belongsTo(User,{foreignKey : 'id_user'});


export default Kembalian;
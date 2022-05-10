import {sequelize,DataTypes} from "./model.js";
import Produk from "./produk.js";
import User from "./user.js";
const Order = sequelize.define('order',{
    id_order : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    id_barang : DataTypes.INTEGER,
    id_user : DataTypes.INTEGER,
    jumlah : DataTypes.INTEGER,
    info : DataTypes.STRING
});
Produk.hasMany(Order,{foreignKey : 'id_barang'});
Order.belongsTo(Produk,{foreignKey : 'id_barang'});
User.hasMany(Order, {foreignKey : 'id_user'});
Order.belongsTo(User,{foreignKey : 'id_user'});


export default Order;
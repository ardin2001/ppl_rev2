import {sequelize,DataTypes} from "./model.js";
import Produk from "./produk.js";
import User from "./user.js";
const Rating = sequelize.define('rating',{
    id_rating : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    id_barang : DataTypes.INTEGER,
    id_user : DataTypes.INTEGER,
    bintang : DataTypes.INTEGER,
    pesan : DataTypes.STRING
});
Produk.hasMany(Rating,{foreignKey : 'id_barang'});
Rating.belongsTo(Produk,{foreignKey : 'id_barang'});
User.hasMany(Rating, {foreignKey : 'id_user'});
Rating.belongsTo(User,{foreignKey : 'id_user'});


export default Rating;
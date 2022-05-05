import {sequelize,DataTypes} from "./model.js";
const User = sequelize.define('user',{
    id_user : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    nama_pembeli : DataTypes.STRING,
    no_telp : DataTypes.STRING,
    email : DataTypes.STRING,
    alamat : DataTypes.STRING
});
export default User;
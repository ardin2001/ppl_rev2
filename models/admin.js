import {sequelize,DataTypes} from "./model.js";
const Admin = sequelize.define('admin',{
    id_admin : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    nama_admin : DataTypes.STRING,
    no_telp : DataTypes.STRING,
    alamat : DataTypes.STRING
});
export default Admin;
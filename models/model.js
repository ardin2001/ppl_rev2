import {Sequelize,DataTypes} from "sequelize";
const sequelize = new Sequelize("toko","root","",{
    host : 'localhost',
    dialect : 'mysql'
});

export {sequelize,DataTypes};
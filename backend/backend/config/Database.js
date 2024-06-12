import {Sequelize} from "sequelize";

const db = new Sequelize('latihanjs','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
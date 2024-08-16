
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
    "NOCAS_database",
    "postgres",
    "postgres",
    {
        host: "mydb.cxeos2wmmsqf.us-east-2.rds.amazonaws.com",
        dialect: "postgres",
        port: 5432 // Ensure this is the correct port
    }
);
 
 
module.exports = sequelize;
 
 
 
 
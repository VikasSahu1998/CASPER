
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
    "NOCAS_database",
    "postgres",
    "postgres",
    {
        host: "mydb.cxeos2wmmsqf.us-east-2.rds.amazonaws.com",
        dialect: "postgres",
        port: 5432 
    }
);
 
module.exports = sequelize;
 
 
 
// const {Sequelize} = require("sequelize");
// const sequelize =new Sequelize(
//     "backend",
//     "test",
//     "password",
//     {
//         host : "localhost",
//         dialect: "postgres",
//     }
// );
// module.exports = sequelize;
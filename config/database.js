
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
    "NOCAS_database",
    "postgres",
    "postgres",
    {
        host: "cognitive-prod-db.cjm884ay2lym.ap-south-1.rds.amazonaws.com",
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
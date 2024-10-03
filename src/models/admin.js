const { DataTypes } = require("sequelize");
const db = require("../../config/database");
 
// Define the Admin model
const Admin = db.define("Admin", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});
 
module.exports = Admin;
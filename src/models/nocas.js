const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Nocas = db.define("Nocas", {
    request_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    airport_name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    site_elevation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    permissible_elevation: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    permissible_height:{
        type: DataTypes.STRING,
        allowNull: false
    },
    snapshot: {
        type: DataTypes.STRING, 
        allowNull: true
    },
});

module.exports = Nocas;

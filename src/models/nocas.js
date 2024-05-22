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
        allowNull: false // Assuming user_id cannot be null
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false // Assuming city cannot be null
    },
    airport_name: {
        type: DataTypes.STRING,
        allowNull: false // Assuming airport_name cannot be null
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false // Assuming latitude cannot be null
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false // Assuming longitude cannot be null
    },
    site_elevation: {
        type: DataTypes.STRING,
        allowNull: false // Assuming site_elevation cannot be null
    },
    snapshot: {
        type: DataTypes.STRING // Assuming snapshot can be null
    }
});

module.exports = Nocas;

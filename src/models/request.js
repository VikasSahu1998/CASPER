const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Request = db.define("Request", {
    request_id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    user_id: { type: DataTypes.UUID }, // Remove the unique constraint if necessary
    services: { type: DataTypes.STRING },
});

module.exports = Request;

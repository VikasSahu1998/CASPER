const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Subscription = db.define("Subscription", {
    subscription_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    subscription_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    subscription_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true
    },
    razorpay_payment_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    request_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0, // Initialize request count to 0
        allowNull: false
    },
    request_limit: {
        type: DataTypes.INTEGER,
        allowNull: false, // Request limit will be set based on subscription type
    }
});

module.exports = Subscription;

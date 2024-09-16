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
    },
    subscription_type: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    razorpay_payment_id: {
        type: DataTypes.STRING,
    },
    allowed_requests: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    remaining_requests: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Subscription;

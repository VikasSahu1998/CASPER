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
        allowNull: false // Assuming user_id cannot be null
    },
    subscription_status: {
        type: DataTypes.STRING,
        allowNull: false // Assuming subscription_status cannot be null
    },
    expiry_date: {
        type: DataTypes.DATE,
        
    },
    subscription_type: {
        type: DataTypes.STRING,
        // allowNull: false // Assuming subscription_type cannot be null
    },
    price: {
        type: DataTypes.STRING,
        // allowNull: false // Assuming price cannot be null
    },
    razorpay_payment_id: {
        type: DataTypes.STRING,
        // allowNull: false // Assuming razorpay_payment_id cannot be null
    }
});


module.exports = Subscription;

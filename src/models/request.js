const { DataTypes} = require("sequelize");
const db = require("../../config/database");

const Request = db.define("Request", {
    request_id: { type:DataTypes.UUID, defaultValue:DataTypes.UUIDV4, primaryKey:true},
    user_id : {type:DataTypes.UUID, unique:true},
    services:{ type: DataTypes.STRING},
    
    

});


module.exports = Request


const Request = require("../models/request");

exports.createRequest = async (requestData) => {
    return Request.create(requestData);
}

exports.getAllService = async (user_id) => {
    return Request.findAll({
        where: { user_id },
        
    });
}
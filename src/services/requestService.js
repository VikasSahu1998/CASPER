const Request = require("../models/request");

exports.createRequest = async (requestData) => {
    return Request.create(requestData);
}
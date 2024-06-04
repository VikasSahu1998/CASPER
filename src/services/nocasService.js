const Nocas = require("../models/nocas");

exports.createNocas = async (nocasData) => {
    return Nocas.create(nocasData);
};



exports.getNocasByUserId = async (user_id) => {
    return Nocas.findAll({ where: { user_id } });
};

exports.checkNocas = async (user_id) => {
    return Nocas.findAll({
        where: {
            user_id: user_id,

        },

    })
}

exports.getAllNocasData = async (user_id) => {
    return Nocas.findAll({
        where: { user_id }
    });
}


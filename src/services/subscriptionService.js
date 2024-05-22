const Subscription = require("../models/subscription");

exports.addUserSubscription = async (subscriptionData) => {
    return Subscription.create(subscriptionData);
    
}

exports.getUserSubscription = async (user_id) => {
 return Subscription.findAll({
    where: {
        user_id: user_id
    },
    order: [['expiry_date', 'DESC']]
 })
} 

exports.getAllUserSubscriptions = async (user_id) => {
    return Subscription.findAll({
        where: { user_id },
        order: [['expiry_date', 'DESC']]
    });
}

exports.getSubscriptionbyId = async (subscriptionId) =>{
    return Subscription.findByPk(subscriptionId)
}

// exports.checkSubscriptions = async (user_id) => {
//     return Subscription.findAll({
//        where: {
//            user_id: user_id,
          
//        },
//        order: [['expiry_date', 'DESC']]
//     })
//    }


const Subscription = require("../models/subscription");

exports.addUserSubscription = async (subscriptionData) => {
    return Subscription.create(subscriptionData);
}

exports.getUserSubscription = async (user_id,subscription_type) => {
 return Subscription.findAll({
    where: {
        user_id: user_id,
        subscription_type:subscription_type
    },
    order: [['expiry_date', 'DESC']]
 })
}

exports.checkSubscriptions = async (user_id) => {
    return Subscription.findAll({
       where: {
           user_id: user_id,
          
       },
       order: [['expiry_date', 'DESC']]
    })
   }


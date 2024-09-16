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

exports.updateSubscription = async(subscriptionId,subscriptionData ) => {
    return Subscription.update(subscriptionData, {where: {subscription_id: subscriptionId}});
}

exports.getSubscriptionbyId = async (subscriptionId) =>{
    return Subscription.findByPk(subscriptionId)
}


exports.decrementRequests = async (user_id) => {
    const subscription = await Subscription.findOne({
        where: { user_id },
        order: [['expiry_date', 'DESC']]
    });

    if (subscription && subscription.remaining_requests > 0) {
        subscription.remaining_requests -= 1;
        await subscription.save();
        return subscription.remaining_requests;
    } else {
        throw new Error("No valid subscription or no remaining requests");
    }
};

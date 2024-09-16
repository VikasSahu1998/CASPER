const subscriptionService = require("../src/services/subscriptionService");
const Subscription = require("../src/models/subscription");
const userService = require("../src/services/userService");
const moment = require('moment');
const { subscriptionTypes, subscriptionStatus } = require("../config/constant");
const checkSubscription = async (req, res, next) => {
    try {
        const { dataValues: loggedInUser } = await userService.getUserById(req.user.id)
        let { dataValues: active_susbscription } = await subscriptionService.getSubscriptionbyId(loggedInUser.active_susbscription_id)
        console.log(active_susbscription, "active_subscripton")
        const expiryDate = moment(active_susbscription.expiry_date, 'YYYY-MM-DD');
        const todaysDate = moment().format('YYYY-MM-DD');
        if (active_susbscription.subscription_type == subscriptionTypes.OneTime) {
            req.isSubscribed = true;
            next();
        }
        else if ((expiryDate.isAfter(todaysDate) && active_susbscription.remaining_requests > 0) || (active_susbscription.subscription_type == subscriptionTypes.FreeTrial && active_susbscription.remaining_requests > 0)) {
            // decrease remaining requests in active subscription
            active_susbscription.remaining_requests = active_susbscription.remaining_requests - 1;
            let updatedSubsriptions = await subscriptionService.updateSubscription(active_susbscription.subscription_id, active_susbscription)
            req.isSubscribed = true;
            next();
        }
        else {
            active_susbscription.subscription_status = subscriptionStatus.EXPIRED;
            let updatedSubsriptions = await subscriptionService.updateSubscription(active_susbscription.subscription_id, active_susbscription)
 
            return res.status(200).json({ message: "Subscription has expired", isSubscribed: false, isExpired: true });
        }
    } catch (error) {
        console.error("Error checking subscription:", error);
        return res.status(500).json({ message: "server error" });
    }
};
 
module.exports = checkSubscription;

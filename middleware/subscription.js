const subscriptionService = require("../src/services/subscriptionService");
const moment = require('moment');
const checkSubscription = async (req, res, next) => {
    try {
        const subscription = await subscriptionService.getUserSubscription(req.user.id);
        let subscriptionbyId = null
        if(req.body.subscription_id){
           subscriptionbyId =  await subscriptionService.getSubscriptionbyId(req.body.subscription_id)
        }
        if (subscription && subscription.length) {
            console.log("first if")
            const expiryDate = moment(subscription[0].expiry_date, 'YYYY-MM-DD');
            const todaysDate = moment().format('YYYY-MM-DD');
            if (subscriptionbyId) {
                req.isOneTimeSubscription = true
                next()
            }
            else if (expiryDate.isAfter(todaysDate) && subscription[0].subscription_type !== "OneTime")
                {
                req.isFreeTrial = false
                req.isSubscribed = true
                next();
            }
            else {
                return res.status(200).json({ message: "Subscription has expired", isSubscribed: false, isExpired: true });
            }
        }
        else {
            req.isFreeTrial = true
            next();
        }
    } catch (error) {
        console.error("Error checking subscription:", error);
        return res.status(500).json({ message: "server error" });
    }
};

module.exports = checkSubscription;
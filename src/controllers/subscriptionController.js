const subscriptionService = require("../../src/services/subscriptionService");
const { subscriptionStatus, subscriptionTypes } = require("../../config/constant");

exports.addUserSubscription = async (req, res) => {
    expiryRangeMonth = { Basic: 1, Standard: 6, Advance: 12 }
    try {

        let expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + expiryRangeMonth[req.body.subscription_type]);
        let newSubscription = {
            user_id: req.user.id,
            subscription_status: subscriptionStatus.ACTIVE,
            expiry_date: expiryDate.toString(),
            subscription_type: req.body.subscription_type,
            price: req.body.price
        }
        console.log(newSubscription, "swefr")
        const subscription = await subscriptionService.addUserSubscription(newSubscription);

        res.status(201).json(subscription);
    } catch (error) {
        console.log(error, "yghj")
        res.status(500).json({ error: "Internal Error" });
    }
};


exports.getUserSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.getUserSubscription(req.body.user_id, req.body.subscription_type);
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.checkSubscriptions = async (req, res) => {
    try {
        const subscriptions = await subscriptionService.checkSubscriptions(req.user.id)
        if (subscriptions && subscriptions.length) {
            const expiryDate = new Date(subscriptions[0].expiry_date);
            const todaysDate = new Date();
            if (expiryDate > todaysDate) {
                return res.status(200).json({ message: "You are already subscribed", isSubscribed: true, isExpired: false });
            } else {
                return res.status(401).json({ message: "All Subscriptions have expired", isSubscribed: false, isExpired: true });
            }
        }
        else {
            return res.status(404).json({
                message: "No subscriptions found for the user",
                isSubscribed: false,
                isExpired: true
            });
        }

    } catch (error) {
        console.log(error, "yghj")
        res.status(500).json({ error: "Internal Error" });
    }
};




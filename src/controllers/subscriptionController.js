const subscriptionService = require("../../src/services/subscriptionService");
const { subscriptionStatus, subscriptionTypes } = require("../../config/constant");
const moment = require('moment');
const Subscription = require("../models/subscription");
const userService = require("../services/userService");

exports.addUserSubscription = async (req, res) => {
    expiryRangeMonth = { OneTime: 0, Basic: 1, Standard: 3, Advance: 5 };
    allowedRequests = { [subscriptionTypes.FreeTrial]: 3, [subscriptionTypes.OneTime]: 0, [subscriptionTypes.Basic]: 10, [subscriptionTypes.Standard]: 15, [subscriptionTypes.Advance]: 20 }; // Define allowed requests for each subscription type.

    try {
        
        const expiryDate = moment().add(expiryRangeMonth[req.body.subscription_type], 'months').format('YYYY-MM-DD');
        const allowedRequestsForType = allowedRequests[req.body.subscription_type]; // Get the allowed requests for the selected subscription type.

        let newSubscription = {
            user_id: req.user.id,
            subscription_status: subscriptionStatus.ACTIVE,
            expiry_date: expiryDate,
            subscription_type: req.body.subscription_type,
            price: req.body.price,
            razorpay_payment_id: req.body.razorpay_payment_id,
            allowed_requests: allowedRequestsForType, // Set allowed requests.
            remaining_requests: allowedRequestsForType // Initially, remaining requests will be the same as allowed requests.
        };
        if (req.body.subscription_type == "OneTime") {
            newSubscription.subscription_status = subscriptionStatus.EXPIRED;
        }
        if (req.body.subscribeAgain && req.body.isSubscribed) {
        }
        const subscription = await subscriptionService.addUserSubscription(newSubscription);
        let { dataValues: loggedInUser } = await userService.getUserById(req.user.id)
        loggedInUser.active_susbscription_id = subscription.dataValues.subscription_id;
        let user = await userService.updateUser(loggedInUser.id, loggedInUser);
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
};


exports.getUserSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.getUserSubscription(req.body.user_id);
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllUserSubscriptions = async (req, res) => {
    const user_id = req.query.user_id;
    try {
        const subscriptions = await subscriptionService.getAllUserSubscriptions(user_id);
        res.status(200).json(subscriptions);
    } catch (error) {
        console.error("Error fetching subscriptions:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findAll();
        res.status(200).json(subscription);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


exports.checkSubscriptions = async (req, res) => {
    try {
        const subscriptions = await subscriptionService.getUserSubscription(req.user.id)
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
        res.status(500).json({ error: "Internal Error" });
    }
};





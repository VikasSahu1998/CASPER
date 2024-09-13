const subscriptionService = require("../../src/services/subscriptionService");
const { subscriptionStatus, subscriptionTypes } = require("../../config/constant");
const moment = require('moment');
const Subscription = require("../models/subscription");

exports.addUserSubscription = async (req, res) => {
    const expiryRangeMonth = { FreeTrial: 0, Basic: 1, Standard: 3, Advance: 5 };
    const requestLimits = { FreeTrial: 3, Basic: 10, Standard: 15, Advance: 20 };
    
    try {
        // Validate necessary fields
        if (!req.body.subscription_type || req.body.price == null || !req.body.razorpay_payment_id && req.body.subscription_type !== 'FreeTrial') {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Calculate expiry date based on subscription type
        const expiryDate = moment().add(expiryRangeMonth[req.body.subscription_type], 'months').format('YYYY-MM-DD');

        // Create new subscription object
        let newSubscription = {
            user_id: req.user.id,
            subscription_status: subscriptionStatus.ACTIVE,
            expiry_date: expiryDate,
            subscription_type: req.body.subscription_type,
            price: req.body.price,
            razorpay_payment_id: req.body.razorpay_payment_id || null,
            request_count: 0,  // Initialize request count to 0
            request_limit: requestLimits[req.body.subscription_type] // Set the request limit
        };

        // Handle OneTime subscription type
        if (req.body.subscription_type === "FreeTrial") {
            newSubscription.subscription_status = subscriptionStatus.ACTIVE;
        }

        // Add subscription
        const subscription = await subscriptionService.addUserSubscription(newSubscription);
        return res.status(201).json(subscription);

    } catch (error) {
        console.error("Error adding subscription:", error);
        return res.status(500).json({ error: "Internal Server Error" });
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
        const subscriptions = await subscriptionService.getUserSubscription(req.user.id);

        if (subscriptions && subscriptions.length) {
            const subscription = subscriptions[0]; // Assuming one active subscription
            const expiryDate = new Date(subscription.expiry_date);
            const todaysDate = new Date();

            // Check if subscription is active and not expired
            if (expiryDate > todaysDate) {
                // Check request limit
                if (subscription.request_count >= subscription.request_limit) {
                    return res.status(403).json({
                        message: "Request limit reached for your subscription plan.",
                        isSubscribed: true,
                        isExpired: false,
                        requestCount: subscription.request_count,
                        requestLimit: subscription.request_limit
                    });
                } else {
                    // Increment request count on every valid request
                    await subscriptionService.incrementRequestCount(req.user.id);

                    return res.status(200).json({
                        message: "You are subscribed and request is valid.",
                        isSubscribed: true,
                        isExpired: false,
                        requestCount: subscription.request_count,
                        requestLimit: subscription.request_limit
                    });
                }
            } else {
                return res.status(401).json({
                    message: "All subscriptions have expired",
                    isSubscribed: false,
                    isExpired: true
                });
            }
        } else {
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

exports.incrementRequestCount = async (user_id) => {
    try {
        const subscription = await Subscription.findOne({ 
            where: { user_id, subscription_status: subscriptionStatus.ACTIVE } 
        });
        const todaysDate = new Date();

        // Ensure subscription is active and not expired
        if (subscription && new Date(subscription.expiry_date) > todaysDate) {
            subscription.request_count += 1;
            await subscription.save();
        }
    } catch (error) {
        console.error("Error incrementing request count:", error);
        throw error;
    }
};







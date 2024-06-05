const userService = require("../services/userService");
const nocasService = require("../services/nocasService");
const Nocas = require("../models/nocas");

exports.createNocas = async (req, res) => {
    try {
        // Extract user_id and other fields from request body
        const { user_id, Latitude, Longitude, CITY, airport_name } = req.body; // Corrected capitalization for consistency

        // Check if the user exists
        const user = await userService.getUserById(user_id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create nocas data object
        const nocasData = {
            user_id,
            city: req.body.city, // Assigning values to the correct keys
            airport_name,
            latitude: req.body.latitude, // Assigning values to the correct keys
            longitude: req.body.longitude, // Assigning values to the correct keys
            site_elevation: req.body.site_elevation,
            // snapshot:req.body.snapshot,
            distance:req.body.distance,
            permissible_elevation:req.body.permissible_elevation,
            permissible_height:req.body.permissible_height // Make sure site_elevation is present in the request body
        };

        // Create a new Nocas entry
        const newNocasEntry = await nocasService.createNocas(nocasData);

        // Respond with the created nocas entry
        const reqcount =  req.isFreeTrial ? req.reqCount+1:0;
        let remainingCount = 3 - Math.min(req.reqCount, 3)
        console.log(remainingCount,"de")
        res.status(201).json({newNocasEntry, freeTrialCount:remainingCount,isOneTimeSubscription:req.isOneTimeSubscription,isSubscribed:req.isSubscribed});
    } catch (error) {
        // Handle errors and respond with appropriate status code and message
        console.error("Error creating nocas entry:", error);
        res.status(500).json({ error: "Failed to create nocas entry" });
    }
};


exports.getAllpermissible = async (req, res) => {
    try {
        const nocas = await Nocas.findAll();
        res.status(200).json(nocas);
    } catch (error) {
        console.error("Error fetching nocas:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


exports.createOneTime = async (req, res) => {
    try {
        // Extract user_id and other fields from request body
        const { user_id, Latitude, Longitude, CITY, airport_name } = req.body; // Corrected capitalization for consistency

        // Check if the user exists
        const user = await userService.getUserById(user_id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create nocas data object
        const nocasData = {
            user_id,
            city: req.body.city, // Assigning values to the correct keys
            airport_name,
            latitude: req.body.latitude, // Assigning values to the correct keys
            longitude: req.body.longitude, // Assigning values to the correct keys
            site_elevation: req.body.site_elevation,
            distance:req.body.distance,
            permissible_elevation:req.body.permissible_elevation,
            permissible_height:req.body.permissible_height // Make sure site_elevation is present in the request body
        };

        // Create a new Nocas entry
        const newNocasEntry = await nocasService.createNocas(nocasData);

        // Respond with the created nocas entry
       
        res.status(201).json({newNocasEntry,message:"One Time Payment is Done"});
    } catch (error) {
        // Handle errors and respond with appropriate status code and message
        console.error("Error creating nocas entry:", error);
        res.status(500).json({ error: "Failed to create nocas entry" });
    }
};



exports.getAllNocasData = async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const nocas = await nocasService.getAllNocasData(user_id);
        res.status(200).json(nocas);
    } catch (error) {
        console.error("Error fetching nocas data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
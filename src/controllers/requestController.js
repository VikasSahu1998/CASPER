const Request = require("../models/request");
const userService = require("../services/userService");
const requestService = require("../services/requestService");

exports.createRequest = async (req, res) => {
    try {
        const { services, user_id } = req.body;
        if (!services || !user_id) {
            return res.status(400).json({ error: "services and user_id are required" });
        }
        const user = await userService.getUserById(user_id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const newRequest = await requestService.createRequest({
            services,
            user_id
        });
        return res.status(201).json(newRequest);
    } catch (error) {
        console.error("Error creating request:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllService = async (req, res) => {
    try {
        const user_id = req.query.user_id; // Extract user_id from query parameters
        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }
        const services = await requestService.getAllService(user_id);
        res.status(200).json(services);
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

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

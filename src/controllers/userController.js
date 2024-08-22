const userService = require("../services/userService");
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const jwtconfig = require('../../config/jwt')
const bcrypt = require('bcrypt');
 
exports.createUSer = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            if (user.email === req.body.email) {
                res.status(409).json({ message: "Email already exists" });
            } else {
                res.status(409).json({ message: "Mobile number already exists" });
            }
        } else {
            const newuser = await userService.createUser(req.body);
            res.status(201).json(newuser);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 
exports.checkPhoneNumberExists = async (req, res) => {
    try {
        const { phone_number } = req.body;
        const user = await User.findOne({ where: { phone_number } });
        if (user) {
            console.log("User found:", user);
            return res.status(200).json({ exists: true });
        } else {
            console.log("User not found");
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error("Error checking phone number:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
 
 
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
 
 
exports.updateUser = async (req, res) => {
    const userId = req.body.id;
    try {
        const user = await userService.updateUser(userId, req.body);
        if (!user) {
            res.status(404).json({ message: "User Not found" });
        }
        else {
            let updatedUser = await userService.getUserById(userId);
            res.status(200).json({ updatedUser, message: "User Updated Successfully" });
 
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
 
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await userService.deleteUser(userId);
        if (result === 0) {
            res.status(404).json({ message: "User Not found" });
        }
        res.status(204).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 
 
exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.body.id);
 
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(409).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 
 
exports.getMyProfile = async (req, res) => {
    try {
        const user = await userService.getUserById(req.user.id);
 
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(409).json({ message: "User not found" });
        }
 
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 
exports.userLogin = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if (user) {
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
            if (isPasswordMatch) {
                const { password, ...userWithoutPassword } = user.dataValues;
                const token = jwt.sign(userWithoutPassword, jwtconfig.jwtsecretkey, { expiresIn: jwtconfig.tokenExpiration });
                return res.status(200).json({ message: "User Login Successfully", success: true, jwttoken: token });
            } else {
                return res.status(404).json({ message: "Incorrect Password", success: false });
            }
        } else {
            return res.status(404).json({ message: "User not found", success: false });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: "Internal Server Error", success: false });
    }
};
 
exports.updatePassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await userService.updateUser(user.id, { password: hashedPassword });
        return res.status(200).json({ message: "Password changed successfully", success: true });
    } catch (error) {
        console.error("Error updating password:", error);
        return res.status(500).json({ error: "Internal Server Error", success: false });
    }
};
 
exports.changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        const user = await userService.getUserById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Current password is incorrect", success: false });
        }
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await userService.updateUser(req.user.id, { password: hashedNewPassword });
        return res.status(200).json({ message: "Password updated successfully", success: true });
    } catch (error) {
        console.error("Error changing password:", error);
        return res.status(500).json({ error: "Internal Server Error", success: false });
    }
};
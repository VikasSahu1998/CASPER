const jwt = require("jsonwebtoken");
const adminService = require('../services/adminService');
const Admin = require('../models/admin');
const jwtconfig = require("../../config/jwt"); // Ensure you have a file for jwt configuration

async function seedAdminData() {
  await adminService.insertHardcodedAdminData();
}

async function loginAdmin(req, res) {
  const { email, password } = req.body;
  try {
    // Find the admin by email
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Compare the provided password with the stored password directly
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin.id, name: admin.name, email: admin.email }, jwtconfig.jwtsecretkey, { expiresIn: jwtconfig.tokenExpiration });

    // Successful login
    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = {
  seedAdminData,
  loginAdmin
};

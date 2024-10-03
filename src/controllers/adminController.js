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
 
    // Check if the email belongs to the admin (admin@cognitivenavigation.com)
    const isAdmin = email === 'admin@cognitivenavigation.com';
 
    // Successful login
    return res.status(200).json({
      message: 'Login successful!',
      jwttoken: token,
      success: true,
      isAdmin: isAdmin // Return this flag to the frontend
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
 
async function checkAdmin(req, res) {
  console.log("checkAdmin called");
  const { email } = req.body;
  console.log("Email:", email);
  try {
      const admin = await adminService.getAdminByEmail(email); // Make sure this function is correctly defined
      if (admin) {
          return res.json({ success: true, isAdmin: true });
      } else {
          return res.json({ success: true, isAdmin: false });
      }
  } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ success: false, message: 'Database error' });
  }
}
 
module.exports = {
  seedAdminData,
  loginAdmin,
  checkAdmin
};
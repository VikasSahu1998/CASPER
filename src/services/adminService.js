const Admin = require('../models/admin')
const bcrypt = require('bcryptjs');

const adminData = [
  { name: 'demo', email: 'demo@gmail.com', password: 'demo@123' },
  { name: 'test', email: 'test@gmail.com', password: 'test@123' },
];

async function isAdminTableEmpty() {
  try {
    const count = await Admin.count();
    return count === 0;
  } catch (error) {
    console.error("Error checking if Admin table is empty:", error);
    return true; // Assume empty in case of error
  }
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function insertHardcodedAdminData() {
  try {
    await Admin.destroy({ where: {}, truncate: true }); // Clear existing records
    for (const admin of adminData) {
      // Directly assign the password without hashing
      await Admin.create(admin);
    }
  } catch (error) {
    console.error('Error inserting hardcoded admin data:', error);
  }
}



module.exports = {
  insertHardcodedAdminData,
};

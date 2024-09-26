const Admin = require('../models/Admin');


const adminData = [
  { name: 'Admin', email: 'admin@cognitivenavigation.com', password: 'Admin@#2024' },
  { name: 'test', email: 'test@gmail.com', password: 'test@123' },
];





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

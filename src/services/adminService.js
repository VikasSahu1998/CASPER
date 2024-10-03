const Admin = require('../models/admin');
 
const adminData = [
  { name: 'Admin', email: 'admin@cognitivenavigation.com', password: 'Admin@#2024' },
];
 
async function insertHardcodedAdminData() {
  try {
    await Admin.destroy({ where: {}, truncate: true }); // Clear existing records
    for (const admin of adminData) {
      await Admin.create(admin);
    }
  } catch (error) {
    console.error('Error inserting hardcoded admin data:', error);
  }
}
 
const getAdminByEmail = async (email) => {
  try {
    const user = await Admin.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error('Error fetching admin:', error);
    throw new Error('Database fetch error');
  }
};
 
// Ensure that both functions are exported
module.exports = {
  insertHardcodedAdminData,
  getAdminByEmail, // Ensure this is included in exports
};
 
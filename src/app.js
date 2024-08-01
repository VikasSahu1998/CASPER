const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('../config/database');
const compression = require('compression');
const fs = require('fs');
 
const app = express();
 
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
 
// DB connection
let PORT = process.env.PORT || 3001;
 
sequelize.sync()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .then(() => {
    console.log('Users table created successfully');
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL:', err);
  });
 
// API routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);
 
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);
 
const airportRoutes = require('./routes/airportsRoutes');
app.use('/api', airportRoutes);
 
const otpRoutes = require('./routes/otpRoutes');
app.use('/api/otp', otpRoutes);
 
const subscriptionRoutes = require('./routes/subscriptionRoutes');
app.use('/api/subscription', subscriptionRoutes);
 
const requestRoutes = require('./routes/requestRoutes');
app.use('/api/request', requestRoutes);
 
const nocasRoutes = require('./routes/nocasRoutes');
app.use('/api/nocas', nocasRoutes);
 
 
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use('/uploads', express.static(uploadDir));
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
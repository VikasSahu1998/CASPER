const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('../config/database');
const compression = require('compression');
const adminController = require('./controllers/adminController');

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
  .then(async () => {
    console.log('Database connected and synchronized');

    // Seed admin data
    await adminController.seedAdminData(); // Call the function to insert data

  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL:', err);
  });

// API routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);


const airportRoutes = require('./routes/airportsRoutes');
app.use('/api', airportRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

const otpRoutes = require('./routes/otpRoutes');
app.use('/api/otp', otpRoutes);

const subscriptionRoutes = require('./routes/subscriptionRoutes');
app.use('/api/subscription', subscriptionRoutes);

const requestRoutes = require('./routes/requestRoutes');
app.use('/api/request', requestRoutes);

const nocasRoutes = require('./routes/nocasRoutes');
app.use('/api/nocas', nocasRoutes);

const geoJsonRoutes = require('./routes/geojsonRoutes');
app.use('/api/geojson', geoJsonRoutes);

const airportDataRoutes = require('./routes/airportDataRoutes'); // Ensure this path is correct
app.use('/api/airportinfo', airportDataRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Response for root URL
});

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const axios = require('axios');

app.use('/uploads', express.static(uploadDir));
app.get('/send-otp', async (req, res) => {
  const { phone, otp } = req.query;
  const user = 'Cognitive_Navigation';
  const pass = 'CognitiveSms2024$';
  const sender = 'CNPLAS';
  const text = `Your Registration OTP is ${otp}. Please do not share this code with anyone.`;
  const smsApiUrl = `https://bhashsms.com/api/sendmsg.php?user=${user}&pass=${pass}&sender=${sender}&phone=${phone}&text=${encodeURIComponent(text)}&priority=ndnd&stype=normal`;

  try {
    const response = await axios.get(smsApiUrl);
    res.send(response.data);
  } catch (error) {
    console.error('Error sending OTP:', error.response ? error.response.data : error.message);
    res.status(500).send('Failed to send OTP');
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

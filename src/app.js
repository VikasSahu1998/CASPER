const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('../config/database');
const compression = require('compression');
const fs = require('fs');
const https = require('https'); // Import the HTTPS module

const app = express();

// Load environment variables
dotenv.config();

// Middleware
const corsOptions = {
  origin: 'http://localhost:4200', // Your Angular app's URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB connection
let PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
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

const geoJsonRoutes = require('./routes/geojsonRoutes');
app.use('/api/geojson', geoJsonRoutes);

const airportDataRoutes = require('./routes/airportDataRoutes'); // Ensure this path is correct
app.use('/api/airportinfo', airportDataRoutes);

// Uploads directory
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use('/uploads', express.static(uploadDir));

// SSL options (update the paths to your SSL certificate and key)
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certificates/server.key')), // Update with your path
  cert: fs.readFileSync(path.join(__dirname, '../certificates/server.cert')) // Update with your path
};
// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Response for root URL
});
// Start HTTPS server
https.createServer(sslOptions, app).listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start HTTPS server:', err);
  } else {
    console.log(`HTTPS Server is running on port ${PORT}`);
  }
});

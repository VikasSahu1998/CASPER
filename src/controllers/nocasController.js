const express = require('express');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const multer = require('multer');
const userService = require("../services/userService");
const nocasService = require("../services/nocasService");
const Nocas = require("../models/nocas");

const app = express();

// Serve static files from the uploads directory
const uploadDir = path.join('C:', 'Users', 'Public', 'uploads');
app.use('/uploads', express.static(uploadDir));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

// Upload and save screenshot
exports.uploadScreenshot = upload.single('screenshot');

exports.saveScreenshot = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Convert image to PNG format
    const pngBuffer = await sharp(file.path).png().toBuffer();
    const pngFileName = `${Date.now()}-mapScreenshot.png`;
    const pngFilePath = path.join(uploadDir, pngFileName);

    // Save the PNG buffer to a file
    await fs.promises.writeFile(pngFilePath, pngBuffer);

    // Respond with the relative file path
    const relativeFilePath = path.relative(uploadDir, pngFilePath);
    res.status(200).json({ message: 'Screenshot saved successfully', filePath: relativeFilePath });
  } catch (error) {
    console.error('Error processing or saving image:', error);
    res.status(500).json({ error: 'Failed to save screenshot' });
  }
};

// Create Nocas entry
exports.createNocas = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, snapshot, distance, permissible_elevation, permissible_height } = req.body;

    // Check if the user exists
    const user = await userService.getUserById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    const nocasData = {
      user_id,
      city,
      airport_name,
      latitude,
      longitude,
      site_elevation,
      snapshot, // This should be just the filename, not a URL
      distance,
      permissible_elevation,
      permissible_height
    };
    
    // Create a new Nocas entry
    const newNocasEntry = await nocasService.createNocas(nocasData);

    // Respond with the created nocas entry
    const reqcount = req.isFreeTrial ? req.reqCount + 1 : 0;
    let remainingCount = 3 - Math.min(req.reqCount, 3);
    res.status(201).json({ newNocasEntry, freeTrialCount: remainingCount, isOneTimeSubscription: req.isOneTimeSubscription, isSubscribed: req.isSubscribed });
  } catch (error) {
    console.error("Error creating nocas entry:", error);
    res.status(500).json({ error: "Failed to create nocas entry" });
  }
};

// Get all permissible entries
exports.getAllPermissible = async (req, res) => {
  try {
    const nocas = await Nocas.findAll();
    const nocasWithSnapshots = nocas.map(nocasEntry => ({
      ...nocasEntry.toJSON(),
      snapshot: `${req.protocol}://${req.get('host')}/uploads/${path.basename(nocasEntry.snapshot)}`
    }));
    res.status(200).json(nocasWithSnapshots);
  } catch (error) {
    console.error("Error fetching nocas:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a one-time entry
exports.createOneTime = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, distance, permissible_elevation, permissible_height, request_id } = req.body;

    // Check if the user exists
    const user = await userService.getUserById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const snapshotPath = `${request_id}.png`; // Just the filename

    const nocasData = {
      user_id,
      city,
      airport_name,
      latitude,
      longitude,
      site_elevation,
      snapshot: snapshotPath, // Ensure .png extension is added to the snapshot path
      distance,
      permissible_elevation,
      permissible_height
    };

    // Create a new Nocas entry
    const newNocasEntry = await nocasService.createNocas(nocasData);

    // Respond with the created nocas entry
    res.status(201).json({ newNocasEntry, message: "One Time Payment is Done" });
  } catch (error) {
    console.error("Error creating nocas entry:", error);
    res.status(500).json({ error: "Failed to create nocas entry" });
  }
};

// Get all Nocas data
exports.getAllNocasData = async (req, res) => {
  try {
    const user_id = req.query.user_id;
    const nocas = await nocasService.getAllNocasData(user_id);
    res.status(200).json(nocas);
  } catch (error) {
    console.error("Error fetching nocas data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userService = require("../services/userService");
const nocasService = require("../services/nocasService");
const Nocas = require("../models/nocas");
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const { request_id } = req.body;
    if (!request_id) {
      return cb(new Error('Request ID is required'));
    }
    cb(null, `${request_id}.png`);
  }
});

const upload = multer({ storage: storage });

exports.uploadScreenshot = upload.single('screenshot');

exports.saveScreenshot = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const relativeFilePath = path.join('uploads', file.filename);

  res.status(200).json({ message: 'Screenshot saved successfully', filePath: relativeFilePath });
};

exports.createNocas = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, snapshot, distance, permissible_elevation, permissible_height, request_id } = req.body;

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
      snapshot: `/uploads/${request_id}.png`,
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

exports.getAllPermissible = async (req, res) => {
  try {
    const nocas = await Nocas.findAll();
    res.status(200).json(nocas);
  } catch (error) {
    console.error("Error fetching nocas:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createOneTime = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, distance, permissible_elevation, permissible_height, request_id } = req.body;

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
      snapshot: `/uploads/${request_id}.png`,
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

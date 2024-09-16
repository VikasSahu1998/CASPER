const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const multer = require('multer');
const userService = require("../services/userService");
const nocasService = require("../services/nocasService");
const Nocas = require("../models/nocas");
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});
const upload = multer({ storage: storage });
exports.uploadScreenshot = upload.single('screenshot');
exports.saveScreenshot = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = path.join(uploadDir, file.filename);
    const pngBuffer = await sharp(filePath).png().toBuffer();
    const pngFileName = `${Date.now()}-mapScreenshot.png`;
    const pngFilePath = path.join(uploadDir, pngFileName);
    await fs.promises.writeFile(pngFilePath, pngBuffer);
    const relativeFilePath = path.relative(__dirname, pngFilePath);
    res.status(200).json({ message: 'Screenshot saved successfully', filePath: relativeFilePath });
  } catch (error) {
    console.error('Error processing or saving image:', error);
    res.status(500).json({ error: 'Failed to save screenshot' });
  }
};
exports.createNocas = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, snapshot, distance, permissible_elevation, permissible_height } = req.body;
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
      snapshot, 
      distance,
      permissible_elevation,
      permissible_height
    };
    const newNocasEntry = await nocasService.createNocas(nocasData);
    res.status(201).json({ newNocasEntry,isSubscribed:req.isSubscribed});
  } catch (error) {
    console.error("Error creating nocas entry:", error);
    res.status(500).json({ error: "Failed to create nocas entry" });
  }
};
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
exports.createOneTime = async (req, res) => {
  try {
    const { user_id, latitude, longitude, city, airport_name, site_elevation, distance, permissible_elevation, permissible_height, request_id } = req.body;
    const user = await userService.getUserById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const snapshotPath = `${request_id}.png`;
    const nocasData = {
      user_id,
      city,
      airport_name,
      latitude,
      longitude,
      site_elevation,
      snapshot: snapshotPath, 
      distance,
      permissible_elevation,
      permissible_height
    };
    const newNocasEntry = await nocasService.createNocas(nocasData);
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
 
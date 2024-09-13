const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');
 
// Directory where GeoJSON files are stored (adjust the path accordingly)
const geoJsonDirectory = path.join(__dirname, '..', 'geojson-files');
const secretKey = 'your-secret-key';
 
// Encrypt data
const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};
 
const getGeoJson = (filename) => {
  return new Promise((resolve, reject) => {
    const baseFilename = filename.replace('.geojson', '').trim();
    const filePath = path.join(geoJsonDirectory, `${baseFilename}.geojson`);
 
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(new Error('File not found'));
      }
 
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return reject(new Error('Failed to read file'));
        }
 
        try {
          const jsonData = JSON.parse(data);
          const encryptedData = encryptData(jsonData);
          resolve(encryptedData);
        } catch (parseError) {
          reject(new Error('Failed to parse JSON'));
        }
      });
    });
  });
};
 
module.exports = {
  getGeoJson
};
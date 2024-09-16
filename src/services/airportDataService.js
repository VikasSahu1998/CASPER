const path = require('path');
const fs = require('fs');

const getAirportsData = () => {
  const dataPath = path.join(__dirname, '../geojson-files/airportData.geojson');
  try {
    if (!fs.existsSync(dataPath)) {
      console.error('File does not exist:', dataPath);
      throw new Error('File not found');
    }
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const airports = JSON.parse(rawData);
    return airports;
  } catch (error) {
    console.error("Error reading the file:", error);
    throw new Error('Failed to fetch airport data');
  }
};


module.exports = {
  getAirportsData
};

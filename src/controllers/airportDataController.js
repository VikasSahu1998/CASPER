const airportService = require('../services/airportDataService'); // Ensure this path is correct

const getAirports = (req, res) => {
  try {
    const airports = airportService.getAirportsData();
    res.status(200).json(airports);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch airport data' });
  }
};

module.exports = {
  getAirports
};

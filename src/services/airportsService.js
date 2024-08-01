const Airport = require('../models/airports');
async function getAllAirports() {
    try {
        const airports = await Airport.findAll();
        return airports;
    } catch (error) {
        console.error('Error fetching airports:', error);
        throw new Error('Failed to fetch airports');
    }
}
module.exports = {
    getAllAirports
};

const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Airport = db.define("Airport", {
    airport_city: { type: DataTypes.STRING },
    airport_icao: { type: DataTypes.STRING },
    airport_name: { type: DataTypes.STRING }
});

module.exports = Airport;

// Array of hardcoded airport data
const airportsData = {
  "airports": [
    {
      "airport_city": "Puri",
      "airport_icao": "VEJH",
      "airport_name": "PURI AIRPORT/Puri/BBI"
    },
    {
      "airport_city": "Coimbatore",
      "airport_icao": "VOCB",
      "airport_name": "Coimbatore International Airport/Coimbatore/CJB"
    },
    {
      "airport_city": "Mumbai",
      "airport_icao": "VABB",
      "airport_name": "Chhatrapati Shivaji Maharaj International Airport/Mumbai/BOM"
    },
    // {
    //   "airport_city": "Mumbai",
    //   "airport_icao": "VAJJ",
    //   "airport_name": "Juhu Airport/Mumbai/BOM"
    // },
    {
      "airport_city": "Ahmedabad",
      "airport_icao": "VAAH",
      "airport_name": "Sardar Vallabhbhai Patel International Airport/Ahmedabad/AMD"
    },
    {
      "airport_city": "Akola",
      "airport_icao": "VAAK",
      "airport_name": "Akola Airport/Akola/AKD"
    },
    {
      "airport_city": "Chennai",
      "airport_icao": "VOMM",
      "airport_name": "Chennai International Airport/Chennai/MAA"
    },
    {
      "airport_city": "Delhi",
      "airport_icao": "VIDP",
      "airport_name": "Indira Gandhi International Airport/Delhi/DEL"
    },
    {
      "airport_city": "Guwahati",
      "airport_icao": "VEGT",
      "airport_name": "Lokpriya Gopinath Bordoloi International Airport/Guwahati/GAU"
    },
    {
      "airport_city": "Hyderabad",
      "airport_icao": "VOHS",
      "airport_name": "Rajiv Gandhi International Airport/Hyderabad/HYD"
    },
    {
      "airport_city": "Jaipur",
      "airport_icao": "VIJP",
      "airport_name": "Jaipur International Airport/Jaipur/JAI"
    },
    {
      "airport_city": "Nagpur",
      "airport_icao": "VANP",
      "airport_name": "Dr. Babasaheb Ambedkar International Airport/Nagpur/NAG"
    },
    {
      "airport_city": "Thiruvananthapuram",
      "airport_icao": "VOTV",
      "airport_name": "Trivandrum International Airport/Thiruvananthapuram/TRV"
    },
    {
      "airport_city": "Vadodara",
      "airport_icao": "VABO",
      "airport_name": "Vadodara Airport/Vadodara/BDQ"
    },
    {
      "airport_city": "Varanasi",
      "airport_icao": "VEBN",
      "airport_name": "Lal Bahadur Shastri Airport/Varanasi/VNS"
    }
  ]
};

// Function to check if the airport table is empty
async function isAirportTableEmpty() {
    try {
        const count = await Airport.count();
        return count === 0;
    } catch (error) {
        console.error('Error checking if airport table is empty:', error);
        return true; // Assume table is empty if there's an error
    }
}

// Function to insert hardcoded airport data into the database
async function insertHardcodedData() {
    try {
        // Check if the airport table is empty
        const isEmpty = await isAirportTableEmpty();

        // If the table is empty, insert the hardcoded data
        if (isEmpty) {
            // Loop through the array and insert each airport data into the database
            for (const airportData of airportsData.airports) {
                await Airport.create(airportData);
            }
            console.log('Hardcoded data inserted successfully.');
        } else {
            console.log('Airport table already contains data. Skipping insertion.');
        }
    } catch (error) {
        console.error('Error inserting hardcoded data:', error);
    }
}

// Synchronize Sequelize models with the database and then insert hardcoded data
db.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
        // Call the function to insert hardcoded data after synchronization
        insertHardcodedData();
    })
    .catch(error => {
        console.error('Error synchronizing database:', error);
    });

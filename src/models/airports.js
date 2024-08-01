const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Airport = db.define("Airport", {
  airport_city: { type: DataTypes.STRING },
  airport_icao: { type: DataTypes.STRING },
  airport_name: { type: DataTypes.STRING }
});
module.exports = Airport;
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
    },
    {
      "airport_city": "Agatti",
      "airport_icao": "VABG",
      "airport_name": "Agatti Airport/Agatti/AGX"
    },
    {
      "airport_city": "Ambikapur",
      "airport_icao": "VABP",
      "airport_name": "Ambikapur Airport/Ambikapur/ABKP"
    },
    {
      "airport_city": "Aurangabad",
      "airport_icao": "VAAU",
      "airport_name": "Aurangabad Airport/Aurangabad/IXU"
    },
    {
      "airport_city": "Balurghat",
      "airport_icao": "VEBG",
      "airport_name": "Balurghat Airport/Balurghat/BLT"
    },
    {
      "airport_city": "Belgaum",
      "airport_icao": "VOBM",
      "airport_name": "Belgaum Airport/Belgaum/IXG"
    },
    {
      "airport_city": "Aligarh",
      "airport_icao": "VIAL",
      "airport_name": "Aligarh Airport/Aligarh/ALH"
    },
    {
      "airport_city": "Amritsar",
      "airport_icao": "VIAR",
      "airport_name": "Sri Guru Ram Dass Jee International Airport/Amritsar/ATQ"
    },
    {
      "airport_city": "Azamgarh",
      "airport_icao": "VEBM",
      "airport_name": "Azamgarh Airport/Azamgarh/AEZ"
    },
    {
      "airport_city": "Baramati",
      "airport_icao": "VABM",
      "airport_name": "Baramati Airport/Baramati/BRM"
    },
    {
      "airport_city": "Berhampur",
      "airport_icao": "VEBR",
      "airport_name": "Berhampur Airport/Berhampur/BMP"
    },
    {
      "airport_city": "Bial",
      "airport_icao": "VOBL",
      "airport_name": "Kempegowda International Airport/Bial/BLR"
    },
    {
      "airport_city": "Cochin",
      "airport_icao": "VOCI",
      "airport_name": "Cochin International Airport/Cochin/COK"
    },
    {
      "airport_city": "Bokaro",
      "airport_icao": "VERB",
      "airport_name": "Bokaro Airport/Bokaro/IN-0191"
    },
    {
      "airport_city": "Birlamgram",
      "airport_icao": "VABG",
      "airport_name": "Birlamgram Airport/Birlamgram/IN-0130"
    }
  ]
};

async function isAirportTableEmpty() {
  try {
    const count = await Airport.count();
    return count === 0;
  } catch (error) {
    console.error('Error checking if airport table is empty:', error);
    return true;
  }
}
async function insertHardcodedData() {
  try {
    const isEmpty = await isAirportTableEmpty();
    if (isEmpty) {
      for (const airportData of airportsData.airports) {
        await Airport.create(airportData);
      }
    } else {
    }
  } catch (error) {
    console.error('Error inserting hardcoded data:', error);
  }
}
db.sync()
  .then(() => {
    insertHardcodedData();
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

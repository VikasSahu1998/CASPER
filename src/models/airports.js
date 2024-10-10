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
      "airport_city": "Koppal",
      "airport_icao": "VOKP",
      "airport_name": "Baldota Koppal Airport/Koppal/OYR",
    },
    {
      "airport_city": "Bhogapuram",
      "airport_icao": "BPTM",
      "airport_name": "Bhogapuram Airport/Bhogapuram/BPT",
    },
    {
      "airport_city": "Dholera",
      "airport_icao": "DOLL",
      "airport_name": "Dholera International Airport/Dholera/DOL",
    },
    {
      "airport_city": "Mumbai",
      "airport_icao": "VABB",
      "airport_name": "Chhatrapati Shivaji Maharaj International Airport/Mumbai/BOM"
    },
    {
      "airport_city": "Coimbatore",
      "airport_icao": "VOCB",
      "airport_name": "Coimbatore International Airport/Coimbatore/CJB"
    },
    {
      "airport_city": "Ahemdabad",
      "airport_icao": "VABV",
      "airport_name": "Sardar Vallabhbhai Patel International Airport/Ahemdabad/AMD"
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
      "airport_city": "Aligarh",
      "airport_icao": "VIAL",
      "airport_name": "Aligarh Airport/Aligarh/ALH"
    },
    {
      "airport_city": "Ambikapur",
      "airport_icao": "VABP",
      "airport_name": "Ambikapur Airport/Ambikapur/ABKP"
    },
    {
      "airport_city": "Amritsar",
      "airport_icao": "VIAR",
      "airport_name": "Sri Guru Ram Dass Jee International Airport/Amritsar/ATQ"
    },
    {
      "airport_city": "Aurangabad",
      "airport_icao": "VAAU",
      "airport_name": "Aurangabad Airport/Aurangabad/IXU"
    },

    {
      "airport_city": "Azamgarh",
      "airport_icao": "VEBM",
      "airport_name": "Azamgarh Airport/Azamgarh/AEZ"
    },

    {
      "airport_city": "Balurghat",
      "airport_icao": "VEBG",
      "airport_name": "Balurghat Airport/Balurghat/BLT"
    },
    {
      "airport_city": "Hirasar",
      "airport_icao": "VAHS",
      "airport_name": "RAJKOT INTERNATIONAL Airport/Hirasar/HSR"

    },
    {
      "airport_city": "Baramati",
      "airport_icao": "VABM",
      "airport_name": "Baramati Airport/Baramati/BRM"
    },
    {
      "airport_city": "Belgaum",
      "airport_icao": "VOBM",
      "airport_name": "Belgaum Airport/Belgaum/IXG"
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
      "airport_city": "Bokaro",
      "airport_icao": "VERB",
      "airport_name": "Bokaro Airport/Bokaro/IN-0191"
    },
    {
      "airport_city": "Cochin",
      "airport_icao": "VOCI",
      "airport_name": "Cochin International Airport/Cochin/COK"
    },
    {
      "airport_city": "Deesa",
      "airport_icao": "VODD",
      "airport_name": "Deesa Airport/Deesa/DDD"
    },
    {
      "airport_city": "Diburgarh",
      "airport_icao": "VEMN",
      "airport_name": "Diburgarh Airport/Diburgarh/DBG"
    },
    {
      "airport_city": "Diu",
      "airport_icao": "VAPD",
      "airport_name": "Diu Airport/Diu/DIU"
    },
    {
      "airport_city": "Durgapur",
      "airport_icao": "VEDG",
      "airport_name": "Durgapur Airport/Durgapur/DGR"
    },
    {
      "airport_city": "Gaya",
      "airport_icao": "VEGY",
      "airport_name": "Gaya Airport/Gaya/GAY"
    },
    {
      "airport_city": "Hubli",
      "airport_icao": "VAHB",
      "airport_name": "Hubli Airport/Hubli/HDI"
    },
    {
      "airport_city": "Imphal",
      "airport_icao": "VEIM",
      "airport_name": "Imphal Airport/Imphal/IMF"
    },
    {
      "airport_city": "Jabalpur",
      "airport_icao": "VAJB",
      "airport_name": "Jabalpur Airport/Jabalpur/JLR"
    },
    {
      "airport_city": "Jewer",
      "airport_icao": "VIJE",
      "airport_name": "Jewer Airport/Jewer/JEW"
    },
    {
      "airport_city": "Jharsaugada",
      "airport_icao": "VEJS",
      "airport_name": "Jharsaugada Airport/Jharsaugada/JRG"
    },
    {
      "airport_city": "Jogbani",
      "airport_icao": "VEJN",
      "airport_name": "Jogbani Airport/Jogbani/JGN"
    },
    {
      "airport_city": "Kadapa",
      "airport_icao": "VOPC",
      "airport_name": "Kadapa Airport/Kadapa/KDP"
    },
    {
      "airport_city": "Kandla",
      "airport_icao": "VABK",
      "airport_name": "Kandla Airport/Kandla/IXY"
    },
    {
      "airport_city": "Kangra",
      "airport_icao": "VIGG",
      "airport_name": "Kangra Airport/Kangra/DHM"
    },
    {
      "airport_city": "Kannur",
      "airport_icao": "VAPM",
      "airport_name": "Kannur International Airport/Kannur/CCJ"
    },
    {
      "airport_city": "Keshod",
      "airport_icao": "VABK",
      "airport_name": "Keshod Airport/Keshod/KSD"
    },
    {
      "airport_city": "Khajuraho",
      "airport_icao": "VEKS",
      "airport_name": "Khajuraho Airport/Khajuraho/HJR"
    },
    {
      "airport_city": "Kishangarh",
      "airport_icao": "VIKG",
      "airport_name": "Kishangarh Airport/Kishangarh/KQH"
    },
    {
      "airport_city": "Kullu",
      "airport_icao": "VIBR",
      "airport_name": "Kullu Airport/Kullu/KUU"
    },
    {
      "airport_city": "Kurnool",
      "airport_icao": "VOBN",
      "airport_name": "Kurnool Airport/Kurnool/KJB"
    },
    {
      "airport_city": "Kushinagar",
      "airport_icao": "VEJN",
      "airport_name": "Kushinagar Airport/Kushinagar/KUN"
    },
    {
      "airport_city": "Lalitpur",
      "airport_icao": "LTP",
      "airport_name": "Lalitpur Airport/Lalitpur/LTP"
    },
    {
      "airport_city": "Lilabari",
      "airport_icao": "VELB",
      "airport_name": "Lilabari Airport/Lilabari/LLB"
    },
    {
      "airport_city": "Lucknow",
      "airport_icao": "VILK",
      "airport_name": "Chaudhary Charan Singh International Airport/Lucknow/LKO"
    },

    {
      "airport_city": "Ludhiana",
      "airport_icao": "VILD",
      "airport_name": "Ludhiana Airport/Ludhiana/UDN"
    },
    {
      "airport_city": "Mangalore",
      "airport_icao": "VOML",
      "airport_name": "Mangalore Airport/Mangalore/IXE"
    },
    {
      "airport_city": "Meerut",
      "airport_icao": "MEER",
      "airport_name": "Meerut Airport/Meerut/MEER"
    },

    {
      "airport_city": "Muzaffarpur",
      "airport_icao": "MUZ",
      "airport_name": "Muzaffarpur Airport/Muzaffarpur/MUZ"
    },
    {
      "airport_city": "Mysore",
      "airport_icao": "VOMY",
      "airport_name": "Mysore Airport/Mysore/IXM"
    },
    {
      "airport_city": "Nanded",
      "airport_icao": "VABN",
      "airport_name": "Nanded Airport/Nanded/NAN"
    },
    {
      "airport_city": "Pakyong",
      "airport_icao": "VEPS",
      "airport_name": "Pakyong Airport/Pakyong/PKG"
    },
    {
      "airport_city": "Pantnagar",
      "airport_icao": "VIPT",
      "airport_name": "Pantnagar Airport /Pantnagar/PGH"
    },
    {
      "airport_city": "Patna",
      "airport_icao": "VEPT",
      "airport_name": "Jay Prakash Narayan International Airport/Patna/PAT"
    },
    {
      "airport_city": "Porbandar",
      "airport_icao": "VABP",
      "airport_name": "Porbandar Airport/Porbandar/PBD"
    },
    {
      "airport_city": "Rajamundary",
      "airport_icao": "VOVR",
      "airport_name": "Rajamundary Airport/Rajamundary/RJA"
    },
    {
      "airport_city": "Rourkela",
      "airport_icao": "VERO",
      "airport_name": "Rourkela Airport/Rourkela/ROU"
    },
    {
      "airport_city": "Shirdi",
      "airport_icao": "VASD",
      "airport_name": "Shirdi Airport/Shirdi/IXR"
    },
    {
      "airport_city": "Sholapur",
      "airport_icao": "VAPO",
      "airport_name": "Sholapur Airport/Sholapur/SOL"
    },

    {
      "airport_city": "Tiruchirapalli",
      "airport_icao": "VOTR",
      "airport_name": "Tiruchirapalli International Airport/Tiruchirapalli/TRZ"
    },
    {
      "airport_city": "Tirupati",
      "airport_icao": "VOTP",
      "airport_name": "Tirupati Airport/Tirupati/TIR"
    },
    {
      "airport_city": "Udaipur",
      "airport_icao": "VIUD",
      "airport_name": "Udaipur Airport/Udaipur/UDR"
    },
    {
      "airport_city": "Utkela",
      "airport_icao": "VEBM",
      "airport_name": "Utkela Airport/Utkela/UKA"
    },
    {
      "airport_city": "Vellore",
      "airport_icao": "VOVR",
      "airport_name": "Vellore Airport/Vellore/VLR"
    },
    {
      "airport_city": "Warangal",
      "airport_icao": "VOBN",
      "airport_name": "Warangal Airport/Warangal/WGC"
    },
    {
      "airport_city": "Calicut",
      "airport_icao": "VAPC",
      "airport_name": "Calicut International Airport/Calicut/CCJ"
    },

    {
      "airport_city": "Agartala",
      "airport_icao": "VEAT",
      "airport_name": "Maharaja Bir Bikram Airport/Pithoragarh/IXA"
    },
    {
      "airport_city": "Dimapur",
      "airport_icao": "VEMR",
      "airport_name": "Dimapur Airport/Dimapur/DMU"
    },
    {
      "airport_city": "Kota",
      "airport_icao": "VIKO",
      "airport_name": "Kota Airport/Kota/KTU"
    },
    {
      "airport_city": "Madurai",
      "airport_icao": "VOMD",
      "airport_name": "Madurai Airport/Madurai/IXM"
    },
    {
      "airport_city": "Kolhapur",
      "airport_icao": "VABK",
      "airport_name": "Kolhapur Airport/Kolhapur/KLH"
    },
    {
      "airport_city": "Kolkata",
      "airport_icao": "VECC",
      "airport_name": "Netaji Subhas Chandra Bose International Airport/Kolkata/CCU"
    },
    {
      "airport_city": "Bhopal",
      "airport_icao": "VABP",
      "airport_name": "Bhopal Airport/Bhopal/BHO"
    },
    {
      "airport_city": "Mopa",
      "airport_icao": "VOGA",
      "airport_name": "Mopa Airport/Mopa/MOP"
    },
    {
      "airport_city": "Bhavnagar",
      "airport_icao": "VABV",
      "airport_name": "Bhavnagar Airport/Bhavnagar/BHU"
    },
    {
      "airport_city": "Hisar",
      "airport_icao": "VIHR",
      "airport_name": "Hisar Airport/Hisar/HSR"
    },
    {
      "airport_city": "Dehradun",
      "airport_icao": "VIDN",
      "airport_name": "Jolly Grant Airport/Dehradun/DED"
    },
    {
      "airport_city": "Jamshedpur",
      "airport_icao": "VEJS",
      "airport_name": "Sonari Airport/Jamshedpur/IXW"
    },
    {
      "airport_city": "Deoghar",
      "airport_icao": "VEDG",
      "airport_name": "Deoghar Airport/Deoghar/DGH"
    },
    {
      "airport_city": "Donakonda",
      "airport_icao": "VODK",
      "airport_name": "Donakonda Airport/Donakonda/"
    },
    {
      "airport_city": "Shimla",
      "airport_icao": "VISM",
      "airport_name": "Shimla Airport/Shimla/SLV"
    },
    {
      "airport_city": "Cooch Behar",
      "airport_icao": "VECO",
      "airport_name": "Cooch Behar Airport/Cooch Behar/COH"
    },
    {
      "airport_city": "Bhuvneshwar",
      "airport_icao": "VEBS",
      "airport_name": "Biju Patnaik International Airport/Bhuvneshwar/BBI"
    },
    {
      "airport_city": "Tuticorin",
      "airport_icao": "VOTK",
      "airport_name": "Tuticorin Airport/Tuticorin/TCR"
    },
    {
      "airport_city": "Bengaluru",
      "airport_icao": "VOBL",
      "airport_name": "Kempegowda International Airport/Bengaluru/BLR"
    },
    {
      "airport_city": "Jeypore",
      "airport_icao": "VEJP",
      "airport_name": "Jeypore Airport/Jeypore/JYP"
    },
    {
      "airport_city": "Jalgaon",
      "airport_icao": "VAJL",
      "airport_name": "Jalgaon Airport/Jalgaon/JAL"
    },
    {
      "airport_city": "Puducherry",
      "airport_icao": "VOPC",
      "airport_name": "Puducherry Airport/Puducherry/PNY"
    },
    {
      "airport_city": "Raipur",
      "airport_icao": "VERP",
      "airport_name": "Swami Vivekananda Airport/Raipur/RPR"
    },
    {
      "airport_city": "Ranchi",
      "airport_icao": "VERC",
      "airport_name": "Birsa Munda Airport/Ranchi/IXR"
    },
    {
      "airport_city": "Surat",
      "airport_icao": "VABP",
      "airport_name": "Surat Airport/Surat/STV"
    },
    {
      "airport_city": "Vijaywada",
      "airport_icao": "VOBZ",
      "airport_name": "Vijaywada Airport/Vijaywada/VGA"
    },
    {
      "airport_city": "Birlamgram",
      "airport_icao": "VABG",
      "airport_name": "Birlamgram Airport/Birlamgram/IN-0130"
    },
    {
      "airport_city": "Ayodhya",
      "airport_icao": "VAYD",
      "airport_name": "Ayodhya Airport/Ayodhya/AYD"
    },
    {
      "airport_city": "Chitrakoot",
      "airport_icao": "VABK",
      "airport_name": "Chitrakoot Airport/Chitrakoot/CKU"
    },

    {
      "airport_city": "Ghaziabad",
      "airport_icao": "VIDX",
      "airport_name": "Hindon Air Force/Ghaziabad/HDO"
    },
    {
      "airport_city": "Ambala",
      "airport_icao": "VIAM",
      "airport_name": "Ambala Air Force/Ambala/"
    },
    {
      "airport_city": "Goa",
      "airport_icao": "VOGO",
      "airport_name": "INS Hansa/Goa/"
    },
    {
      "airport_city": "Pune",
      "airport_icao": "VAPO",
      "airport_name": "Lohegaon Air Force/Pune/PNQ"
    },
    // {
    //   "airport_city": "Cimbatore",
    //   "airport_icao": "VOSX",
    //   "airport_name": "Sulur Air Force/Cimbatore/"
    // },
    {
      "airport_city": "Arakkonnam",
      "airport_icao": "VOAR",
      "airport_name": "INS Rajali/Arakkonnam/"
    },
    {
      "airport_city": "Jodhpur",
      "airport_icao": "VIJO",
      "airport_name": "Jodhpur Air Force/Jodhpur/JDH"
    },
    {
      "airport_city": "Leh",
      "airport_icao": "VILH",
      "airport_name": "Leh Air Force/Leh/IXL"
    },
    {
      "airport_city": "Pathankot",
      "airport_icao": "VIPK",
      "airport_name": "Pathankot Air Force/Pathankot/IXP"
    },
    {
      "airport_city": "Nicobar islands",
      "airport_icao": "VOCX",
      "airport_name": "Car Nicobar Air Force/Nicobar islands/CBD"
    },
    {
      "airport_city": "Tezpur",
      "airport_icao": "VETZ",
      "airport_name": "Tezpur Air Force/Tezpur/TEZ"
    },
    {
      "airport_city": "Thanjavur",
      "airport_icao": "VOTJ",
      "airport_name": "Thanjavur Air Force/Thanjavur/TJV"
    },
    {
      "airport_city": "Agra",
      "airport_icao": "VIAG",
      "airport_name": "Agra Air Force/Agra/AGR"
    },
    {
      "airport_city": "Kochi",
      "airport_icao": "VOCC",
      "airport_name": "INS Garuda/Kochi/INS"
    },
    {
      "airport_city": "Banglore",
      "airport_icao": "VOYK",
      "airport_name": "Yelahanka Air Force/Banglore/"
    },
    {
      "airport_city": "Aizawl",
      "airport_icao": "VELP",
      "airport_name": "Lengpui Airport/Aizawl/LGU"
    },
    {
      "airport_city": "Shillong",
      "airport_icao": "VEBI",
      "airport_name": "Barapani Airport/Shillong/SHL"
    },
    {
      "airport_city": "Bilaspur",
      "airport_icao": "VEBU",
      "airport_name": "Bilaspur Airport/Bilaspur/PAB"
    },
    {
      "airport_city": "Indore",
      "airport_icao": "VAID",
      "airport_name": "Devi Ahilya Bai Holkar Airport/Indore/IDR"
    },
    {
      "airport_city": "Itanagar",
      "airport_icao": "VEAN",
      "airport_name": "Donyi Polo Airport/Itanagar/ITE"
    },
    {
      "airport_city": "Gondia",
      "airport_icao": "VAGN",
      "airport_name": "Gondia Airport/Gondia/GOV"
    },
    {
      "airport_city": "Nashik",
      "airport_icao": "VANR",
      "airport_name": "HAL Ozar Airport/Nashik/ISK"
    },
    {
      "airport_city": "Jagdalpur",
      "airport_icao": "VEJR",
      "airport_name": "Jagdalpur Airport/Jagdalpur/JGB"
    },
    {
      "airport_city": "Vidyanagar",
      "airport_icao": "VOMD",
      "airport_name": "Jindal Vijayanagar Airport/Vidyanagar/VDY"
    },
    {
      "airport_city": "Kalaburagi",
      "airport_icao": "VOGB",
      "airport_name": "Kalaburagi Airport/Kalaburagi/KBX"
    },
    {
      "airport_city": "Moradabad",
      "airport_icao": "VIMD",
      "airport_name": "Moradabad Airport/Moradabad/MOR"
    },
    {
      "airport_city": "Pithoragarh",
      "airport_icao": "VIPG",
      "airport_name": "Naini-Saini Airport/Pithoragarh/PGH"
    },
    {
      "airport_city": "Rupsi",
      "airport_icao": "VERU",
      "airport_name": "Rupsi Airport/Rupsi/RUP"
    },
    {
      "airport_city": "Salem",
      "airport_icao": "VOSM",
      "airport_name": "Salem Airport/Salem/SXV"
    },
    {
      "airport_city": "Shivamogga",
      "airport_icao": "VOSH",
      "airport_name": "Shivamogga Airport/Shivamogga/SIX"
    },
    {
      "airport_city": "Sindhudurg",
      "airport_icao": "VASD",
      "airport_name": "Sindhudurg Airport/Sindhudurg/SID"
    },
    {
      "airport_city": "Tezu",
      "airport_icao": "VETZ",
      "airport_name": "Tezu Airport/Tezu/TEZ"
    },
    {
      "airport_city": "Angul",
      "airport_icao": "VEAN",
      "airport_name": "Angul Airport/Angul/ANJ"
    },
    // {
    //   "airport_city": "Koppal",
    //   "airport_icao": "VOKL",
    //   "airport_name": "Baldota Koppal Airport/Koppal/KLP"
    // },
    {
      "airport_city": "Beas",
      "airport_icao": "VOBX",
      "airport_name": "Beas Airport/Beas/BEX"
    },
    {
      "airport_city": "Hosur",
      "airport_icao": "VOHS",
      "airport_name": "Hosur Airport/Hosur/HOS"
    },
    {
      "airport_city": "Raigarh",
      "airport_icao": "VERG",
      "airport_name": "JSPL Raigarh Airport/Raigarh/RIG"
    },
    {
      "airport_city": "Puttaparthi",
      "airport_icao": "VOTP",
      "airport_name": "Sri Satya Sai Airport/Puttaparthi/PXI"
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

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
    {
      "airport_city": "Ahemdabad",
      "airport_icao": "VABV",
      "airport_name": "Sardar Vallabhbhai Patel International Airport/Ahemdabad/AMD"
    },
    {
      "airport_city": "Bhopal",
      "airport_icao": "VABP",
      "airport_name": "Bhopal Airport/Bhopal/BHO"
    },
    {
      "airport_city": "Lucknow",
      "airport_icao": "VILK",
      "airport_name": "Chaudhary Charan Singh International Airport/Lucknow/LKO"
    },
    {
      "airport_city": "Lalitpur",
      "airport_icao": "LTP",
      "airport_name": "Lalitpur Airport/Lalitpur/LTP"
    },
    {
      "airport_city": "Ludhiana",
      "airport_icao": "VILD",
      "airport_name": "Ludhiana Airport/Ludhiana/UDN"
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
      "airport_city": "Packyong",
      "airport_icao": "VEPT",
      "airport_name": "Packyong Airport/Packyong/PKX"
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
      "airport_city": "Tuticorin",
      "airport_icao": "VOTK",
      "airport_name": "Tuticorin Airport/Tuticorin/TCR"
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
    },
    {
      "airport_city": "Bagdogra",
      "airport_icao": "VEBD",
      "airport_name": "Bagdogra Airport/Bagdogra/IXB"
    },
    {
      "airport_city": "Bilaspur",
      "airport_icao": "VEBP",
      "airport_name": "Bilaspur Airport/Bilaspur/PAB"
    },
 
    {
      "airport_city": "Gorakhpur",
      "airport_icao": "VEGO",
      "airport_name": "Gorakhpur Airport/Gorakhpur/GOP"
    },
 
    {
      "airport_city": "Gaya",
      "airport_icao": "VEGY",
      "airport_name": "Gaya Airport/Gaya/GAY"
    },
    {
      "airport_city": "Hollongi",
      "airport_icao": "VEHL",
      "airport_name": "Hollongi Airport/Hollongi/HLG"
    },
    {
      "airport_city": "Imphal",
      "airport_icao": "VEIM",
      "airport_name": "Imphal Airport/Imphal/IMF"
    },
    {
      "airport_city": "Jagdalpur",
      "airport_icao": "VEJH",
      "airport_name": "Jagdalpur Airport/Jagdalpur/JGB"
    },
 
    {
      "airport_city": "Jharsaugada",
      "airport_icao": "VEJS",
      "airport_name": "Jharsaugada Airport/Jharsaugada/JRG"
    },
    {
      "airport_city": "Jorhat",
      "airport_icao": "VEJT",
      "airport_name": "Jorhat Airport/Jorhat/JRH"
    },
    {
      "airport_city": "Kushinagar",
      "airport_icao": "VEJN",
      "airport_name": "Kushinagar Airport/Kushinagar/KUN"
    },
    {
      "airport_city": "Khajuraho",
      "airport_icao": "VEKS",
      "airport_name": "Khajuraho Airport/Khajuraho/HJR"
    },
    {
      "airport_city": "Lengpui",
      "airport_icao": "VELP",
      "airport_name": "Lengpui Airport/Lengpui/LMP"
    },
    {
      "airport_city": "Lilabari",
      "airport_icao": "VELB",
      "airport_name": "Lilabari Airport/Lilabari/LLB"
    },
 
    {
      "airport_city": "Dimapur",
      "airport_icao": "VEDM",
      "airport_name": "Dimapur Airport/Dimapur/DIP"
    },
    {
      "airport_city": "Pakyong",
      "airport_icao": "VEPS",
      "airport_name": "Pakyong Airport/Pakyong/PKG"
    },
    {
      "airport_city": "Rourkela",
      "airport_icao": "VERO",
      "airport_name": "Rourkela Airport/Rourkela/ROU"
    },
 
    {
      "airport_city": "Rupsi",
      "airport_icao": "VERU",
      "airport_name": "Rupsi Airport/Rupsi/IXU"
    },
    {
      "airport_city": "Tezu",
      "airport_icao": "VETZ",
      "airport_name": "Tezu Airport/Tezu/TEI"
    },
    {
      "airport_city": "Agra",
      "airport_icao": "VIAF",
      "airport_name": "Agra Airport/Agra/AGR"
    },
    {
      "airport_city": "Kullu",
      "airport_icao": "VIBR",
      "airport_name": "Kullu Airport/Kullu/KUU"
    },
    {
      "airport_city": "Bareilly",
      "airport_icao": "VEBL",
      "airport_name": "Bareilly Airport/Bareilly/BEK"
    },
    {
      "airport_city": "Chandigarh",
      "airport_icao": "VICG",
      "airport_name": "Chandigarh Airport/Chandigarh/IXC"
    },
    {
      "airport_city": "Safdarjung",
      "airport_icao": "VIDN",
      "airport_name": "Safdarjung Airport/Safdarjung/SDJ"
    },
    {
      "airport_city": "Hindan",
      "airport_icao": "VIH",
      "airport_name": "Hindan Airport/Hindan/DEL"
    },
    {
      "airport_city": "Kangra",
      "airport_icao": "VIGG",
      "airport_name": "Kangra Airport/Kangra/DHM"
    },
    {
      "airport_city": "Jodhpur",
      "airport_icao": "VIJO",
      "airport_name": "Jodhpur Airport/Jodhpur/JDH"
    },
    {
      "airport_city": "Jammu",
      "airport_icao": "VIJU",
      "airport_name": "Jammu Airport/Jammu/IXJ"
    },
    {
      "airport_city": "Kishangarh",
      "airport_icao": "VIKG",
      "airport_name": "Kishangarh Airport/Kishangarh/KQG"
    },
    {
      "airport_city": "Leh",
      "airport_icao": "VILH",
      "airport_name": "Leh Airport/Leh/IXL"
    },
    {
      "airport_city": "Pithoragarh",
      "airport_icao": "VIPT",
      "airport_name": "Pithoragarh Airport/Pithoragarh/PGH"
    },
    {
      "airport_city": "Agartala",
      "airport_icao": "VEAT",
      "airport_name": "Maharaja Bir Bikram Airport/Pithoragarh/IXA"
    },
 
    {
      "airport_city": "Uttarlai",
      "airport_icao": "VIUT",
      "airport_name": "Uttarlai Airport/Uttarlai/UTA"
    },
    {
      "airport_city": "Agatti",
      "airport_icao": "VABG",
      "airport_name": "Agatti Airport/Agatti/AGX"
    },
 
    {
      "airport_city": "Belagavi",
      "airport_icao": "VOBG",
      "airport_name": "Belagavi Airport/Belagavi/IXG"
    },
    {
      "airport_city": "Bidar",
      "airport_icao": "VABR",
      "airport_name": "Bidar Airport/Bidar/IBR"
    },
    {
      "airport_city": "Vijaywada",
      "airport_icao": "VOBZ",
      "airport_name": "Vijaywada Airport/Vijaywada/VGA"
    },
    {
      "airport_city": "Calicut",
      "airport_icao": "VAPC",
      "airport_name": "Calicut International Airport/Calicut/CCJ"
    },
    {
      "airport_city": "Kadapa",
      "airport_icao": "VOPC",
      "airport_name": "Kadapa Airport/Kadapa/KDP"
    },
    {
      "airport_city": "Mopa",
      "airport_icao": "VOGA",
      "airport_name": "Mopa Airport/Mopa/MOP"
    },
    {
      "airport_city": "Kalaburagi",
      "airport_icao": "VOBG",
      "airport_name": "Kalaburagi Airport/Kalaburagi/GBI"
    },
    {
      "airport_city": "Goa",
      "airport_icao": "VOGO",
      "airport_name": "Goa International Airport/Goa/GOI"
    },
 
    {
      "airport_city": "Shamshabad (RGI)",
      "airport_icao": "VOHS",
      "airport_name": "Rajiv Gandhi International Airport/Shamshabad (RGI)/HYD"
    },
    {
      "airport_city": "Begumpet",
      "airport_icao": "VOBP",
      "airport_name": "Begumpet Airport/Hyderabad/BEG"
    },
    {
      "airport_city": "Jindal Vijayanagar",
      "airport_icao": "VOBL",
      "airport_name": "Jindal Vijayanagar Airport/Jindal Vijayanagar/JDR"
    },
    {
      "airport_city": "Kannur",
      "airport_icao": "VAPM",
      "airport_name": "Kannur International Airport/Kannur/CCJ"
    },
    {
      "airport_city": "Kurnool",
      "airport_icao": "VOBN",
      "airport_name": "Kurnool Airport/Kurnool/KJB"
    },
    {
      "airport_city": "Madurai",
      "airport_icao": "VOMD",
      "airport_name": "Madurai Airport/Madurai/IXM"
    },
 
    {
      "airport_city": "Mysuru",
      "airport_icao": "VOMR",
      "airport_name": "Mysuru Airport/Mysuru/MYQ"
    },
    {
      "airport_city": "Portblair",
      "airport_icao": "VABR",
      "airport_name": "Portblair Airport/Portblair/IXZ"
    },
 
    {
      "airport_city": "Puttaparthi",
      "airport_icao": "VOPC",
      "airport_name": "Puttaparthi Airport/Puttaparthi/PUT"
    },
    {
      "airport_city": "Sambalpur",
      "airport_icao": "VEBM",
      "airport_name": "Sambalpur Airport/Sambalpur/SBP"
    },
    {
      "airport_city": "Srinagar",
      "airport_icao": "VISR",
      "airport_name": "Sheikh ul-Alam International Airport/Srinagar/SXR"
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
      "airport_city": "Vijaywada",
      "airport_icao": "VOBZ",
      "airport_name": "Vijaywada Airport/Vijaywada/VGA"
    },
    {
      "airport_city": "Pantnagar",
      "airport_icao": "VIPT",
      "airport_name": "Pantnagar Airport /Pantnagar/PGH"
    },
    {
      "airport_city": "Visakhapatnam",
      "airport_icao": "VOVZ",
      "airport_name": "Visakhapatnam Airport/Visakhapatnam/VGA"
    },
    {
      "airport_city": "Jabalpur",
      "airport_icao": "VAJB",
      "airport_name": "Jabalpur Airport/Jabalpur/JLR"
    },
    {
      "airport_city": "Jodhpur",
      "airport_icao": "VIJO",
      "airport_name": "Jodhpur Airport/Jodhpur/JDH"
    },
    {
      "airport_city": "Mangalore",
      "airport_icao": "VOML",
      "airport_name": "Mangalore Airport/Mangalore/IXE"
    },
    {
      "airport_city": "Nanded",
      "airport_icao": "VANP",
      "airport_name": "Nanded Airport/Nanded/NDC"
    },
    {
      "airport_city": "Srinagar",
      "airport_icao": "VISR",
      "airport_name": "Sheikh ul-Alam International Airport/Srinagar/SXR"
    },
    {
      "airport_city": "Tiruchirappalli",
      "airport_icao": "VOTR",
      "airport_name": "Tiruchirappalli International Airport/Tiruchirappalli/TRZ"
    },
    {
      "airport_city": "Varanasi",
      "airport_icao": "VEBN",
      "airport_name": "Lal Bahadur Shastri Airport/Varanasi/VNS"
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
      "airport_city": "Hubli",
      "airport_icao": "VAHB",
      "airport_name": "Hubli Airport/Hubli/HDI"
    },
    {
      "airport_city": "Jewer",
      "airport_icao": "VIJE",
      "airport_name": "Jewer Airport/Jewer/JEW"
    },
    {
      "airport_city": "Jogbani",
      "airport_icao": "VEJN",
      "airport_name": "Jogbani Airport/Jogbani/JGN"
    },
    {
      "airport_city": "Kandla",
      "airport_icao": "VABK",
      "airport_name": "Kandla Airport/Kandla/IXY"
    },
    {
      "airport_city": "Keshod",
      "airport_icao": "VABK",
      "airport_name": "Keshod Airport/Keshod/KSD"
    },
    {
      "airport_city": "Kolhapur",
      "airport_icao": "VABK",
      "airport_name": "Kolhapur Airport/Kolhapur/KLH"
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
      "airport_city": "Madhurai",
      "airport_icao": "VOMD",
      "airport_name": "Madhurai Airport/Madhurai/IXM"
    },
 
 
    {
      "airport_city": "Bhavnagar",
      "airport_icao": "VABV",
      "airport_name": "Bhavnagar Airport/Bhavnagar/BHU"
    },
    {
      "airport_city": "Dehradun",
      "airport_icao": "VIDN",
      "airport_name": "Jolly Grant Airport/Dehradun/DED"
    },
    {
      "airport_city": "Hisar",
      "airport_icao": "VIHR",
      "airport_name": "Hisar Airport/Hisar/HSR"
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
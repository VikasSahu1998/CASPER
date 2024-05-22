const nocasService = require("../src/services/nocasService");

const checkNocas = async (req, res, next) => {
    try {
        const nocas = await nocasService.getNocasByUserId(req.user.id);
        if ((nocas && nocas.length < 3 && req.isFreeTrial) || req.isSubscribed) {
           
            req.reqCount = nocas.length
            next()
            
        } else if(req.isOneTimeSubscription){
            req.reqCount = nocas.length
            next()
        }
        
        else {
            return res.status(200).json({ message: "Free trial is expired. Please Subscribe package" , freeTrialCount :0 });
        }
    } catch (error) {
        console.error("Error checking Nocas:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


module.exports = checkNocas;

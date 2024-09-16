const otpService = require("../services/otpService");
const { sendOtp, generateOTP } = require('../../config/otp');
const userService = require("../services/userService")
exports.sendOtp = async (req, res) => {
    const { email } = req.body;
        try {
            const user = await userService.getUserByEmail(email);
            if(user){
                try {
                    const otp = generateOTP();
                    await sendOtp(user.email, otp);
                    let otpData = {user_id:user.id,otp:otp}
                    otpService.saveOtp(otpData,user.id);
                    res.status(200).json({ message: 'OTP sent successfully.' });
                } catch (error) {
                    console.error('Error sending OTP:', error);
                    res.status(500).json({ error: 'Internal Server Error' });
                }
            }
            else{
                 res.status(404).json({ error: 'User Not Found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
};

exports.validateOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (user) {
            const savedOtp = await otpService.getOtpByUserId(user.id);
            if (savedOtp) {
                if (savedOtp.otp === otp) {
                    res.status(200).json({ valid: true, message: 'OTP is valid.' });
                } else {
                    res.status(400).json({ valid: false, error: 'Invalid OTP.' });
                }
            } else {
                res.status(404).json({ valid: false, error: 'OTP data not found.' });
            }
        } else {
            res.status(404).json({ valid: false, error: 'User not found.' });
        }
    } catch (error) {
        console.error('Error validating OTP:', error);
        res.status(500).json({ valid: false, error: 'Internal Server Error' });
    }
};

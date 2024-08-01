const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'swrshoppingmall2022@gmail.com',
        pass: 'xpuamltsdkjuzevj'
    }
});
const sendOtp = async (email, otp) => {
    const mailOptions = {
        from: "swrshoppingmall2022@gmail.com",
        to: email,
        subject: "Your OTP for Verification",
        text: `Your OTP is: ${otp}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("OTP sent successfully.");
    } catch (error) {
        console.error("Error sending OTP:", error);
        throw error;
    }
}
const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString(); // Convert to string
}
module.exports = { generateOTP, sendOtp };

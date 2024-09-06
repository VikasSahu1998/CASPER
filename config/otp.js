const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Use the correct SMTP server
    port: 587, // Use the correct port (587 for TLS)
    secure: false, // Set to false for TLS
    auth: {
        user: 'Support@cognitivenavigation.com',
        // pass: 'CnplCasper2024#$1',
        pass: 'llslrggvjpnvlhgt',

    },

});
const sendOtp = async (email, otp) => {
    const mailOptions = {
        from: "Support@cognitivenavigation.com",
        to: email,
        subject: "Resetting Your Casper Account Password!",
        html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify your login</title>
  <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
</head>

<body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
  <table role="presentation"
    style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
    <tbody>
      <tr>
        <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
          <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
            <tbody>
              <tr>
                <td style="padding: 40px 0px 0px;">
                  <div style="text-align: center;">
                    <div style="padding-bottom: 20px;"><img
                        src="https://www.cognitivenavigation.com/wp-content/uploads/2024/09/CASPER-Cognitive_Logo.png" alt="Cognitive Navigation Pvt. Ltd" style="width: 80px;"></div>
                  </div>
                  <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                    <div style="color: rgb(0, 0, 0); text-align: left;">
                      <h1 style="margin: 1rem 0">Verification code</h1>
                      <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p>
                      <p style="padding-bottom: 16px"><strong style="font-size: 130%">${otp}</strong></p>
                      <p style="padding-bottom: 16px">If you didn't request this, you can ignore this email.</p>
                      <p style="padding-bottom: 16px">Thanks,<br>The Casper team</p>
                    </div>
                  </div>
                  <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>
    `,
        // text: `Your Registration OTP is ${otp}. Please do not share this code with anyone. To know more, visit www.cognitivenavigation.com.\n\nBy - Cognitive Navigation`,
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

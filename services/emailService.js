
const dotenv = require('dotenv');
dotenv.config();

exports.sendLoginNotification = async function sendLoginNotification(user, ipInfo) {
    const mailOptions = {
      from: 'your-app@example.com',
      to: user.email,
      subject: 'New Login Detected',
      text: `Hello ${user.username},
  
  A new login to your account was detected from:
  
  IP: ${ipInfo.ip}
  Country: ${ipInfo.country_name}
  City: ${ipInfo.city}
  
  If this was you, you can mark this device as trusted by visiting:
  https://yourapp.com/trust-device?username=${user.username}&ip=${ipInfo.ip}
  
  If this wasn't you, please secure your account immediately.
  
  Best regards,
  Your App Team`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Login notification email sent');
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  }
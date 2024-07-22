const User = require('../models/user')
const bcrypt = require('bcrypt')
const speakeasy = require('speakeasy')
const ipService = require('../services/ipService')

exports.login = async (req, res) => {
    try {
      const { name, password, token } = req.body;
      
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
      }
      
      const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: token
      });
      
      if (!verified) {
        return res.status(400).json({ error: 'Invalid 2FA token' });
      }
      
          
        const ipInfo = await ipService.getIpInfo(req.ip);
    
          // Check if new device and send notification
          if (isNewDevice) {
            await emailService.sendLoginNotification(user, ipInfo);
          }
      
          // Save user and respond
          await user.save();
          res.json({ message: 'Login successful', isTrustedDevice: ipInfo.isTrusted });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
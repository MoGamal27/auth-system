const User = require('../models/user');


exports.trustDevice = async (req, res) => {
    try {
        const { username, ip } = req.body;
        
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(400).json({ error: 'User not found' });
        }
        
        const ipInfo = user.ipInfo.find(info => info.ip === ip);
        if (!ipInfo) {
          return res.status(400).json({ error: 'IP not found' });
        }
        
        ipInfo.isTrusted = true;
        await user.save();
        
        res.json({ message: 'Device marked as trusted' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };


    exports.deviceTrustStatus = async (req, res) => {
        try {
            const { username } = req.query;
            
            const user = await User.findOne({ username });
            if (!user) {
              return res.status(400).json({ error: 'User not found' });
            }
            
            const ipInfo = user.ipInfo.find(info => info.ip === req.ip);
            const isTrusted = ipInfo ? ipInfo.isTrusted : false;
            
            res.json({ isTrusted });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        };
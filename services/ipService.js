const satelize = require('satelize');

exports.getIpInfo = (ip) => {
  return new Promise((resolve, reject) => {
    satelize.satelize({ip}, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          ip,
          country_code: payload.country_code,
          country_name: payload.country_name,
          region: payload.region,
          city: payload.city,
          latitude: payload.latitude,
          longitude: payload.longitude,
          isTrusted: false
        });
      }
    });
  });
};
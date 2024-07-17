const mongoose = require('mongoose')

const IpInfoSchema = new mongoose.Schema({
    ip: String,
    contry_code: String,
    contry_name: String,
    region: String,
    city: String,
   latitude: Number,
   longitude: Number,
   timestamp: { type: Date, default: Date.now },
   isTrusted: { type: Boolean, default: false}
})

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    ipInfo: [IpInfoSchema]
})

module.exports = mongoose.model('User', UserSchema)

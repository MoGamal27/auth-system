// server.js
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const authRoutes = require('./routes/authRoutes')
const deviceRoutes = require('./routes/deviceRoutes')

app.use(express.json())


// MongoDB Connection
const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
 console.log('MongoDB connected');
}).catch((err) => {
  console.error(err);
});






app.use('/auth', authRoutes)
app.use('/device', deviceRoutes)

app.listen(3000)


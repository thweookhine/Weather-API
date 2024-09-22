const express = require('express')
const axios = require('axios');
const weatherRoute = require('./routes/weatherRoute.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

app.use('/',weatherRoute)

app.listen(port,() => {
    console.log(`App is listening on Port: ${port}`)
})
const { default: axios } = require('axios');
const express = require('express')
const router = express.Router();
const redisClient = require('../config/redis')

router.get('/',async (req,res) => {
    const city = req.query.city;
    let result;
    let isCached = false;

    if(!city){
        res.status(400).send({
            message: 'City must be entered.'
        })
        return;
    }
    
    // Fetch Weather Data
    try{
        const cachedResult = await redisClient.get(city);
        if(cachedResult) {
            isCached = true;
            result = JSON.parse(cachedResult);
        }else{
            const url = `${process.env.WEATHER_API_URL}/${city}?key=${process.env.WEATHER_API_KEY}`
            const response = await axios.get(url);
            result = response.data
            if (result.length === 0) {
                res.status(400).send({
                    message: 'API returned an empty array'
                })
                return;
            }

            // Store in redis
            await redisClient.set(city, JSON.stringify(result), {
                EX: 300,
                NX: true,
              });
        }
        res.status(200).send({
            isCached,
            result
        })        
    }catch(err) {
        res.status(500).send({
            message: err.message
        })
    }


})

module.exports = router
const {createClient} = require('redis')

let redisClient;

(async () => {
    if(!redisClient){
        redisClient = createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT
            }
        });
    
        //Register Error Event on redis object
        redisClient.on("error",(error) => console.error(`Error: ${error}`))
        redisClient.on('connect', () => console.info('Redis connected'))
        await redisClient.connect()
    }
   
})();

module.exports = redisClient
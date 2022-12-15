const redis = require('redis');

const url = process.env.SESSION_DATABASE_URL;

const redisClient = redis.createClient({
    legacyMode: true,
    url
});

module.exports = {redisClient};
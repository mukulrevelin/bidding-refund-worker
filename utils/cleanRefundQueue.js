const redis = require('redis');
const asyncFunctionBuilder = require('./asyncFunctionBuilder');
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.js')[env];

const client = redis.createClient(config.redisUrl);

const delAsync = asyncFunctionBuilder(client, 'del');

function cleanBullQueue() {
    client.keys('*refund_list*', async function(err, keys){
        if(err) return console.log(err);
        console.log(keys);
        for(const key of keys) {
            console.log(key);
            await delAsync(key);
        }
        console.log('Done');
    });
}

cleanBullQueue();
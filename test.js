'use strict';

const Queue = require('bull');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const refundQueue = new Queue('refund_list', config.redisUrl);

async function emptyQueue() {
    try {
        console.log('Start');
        const jobs = await refundQueue.clean(5000);
        console.log(jobs);
    } catch (error) {
        console.log(error);
    }
}

emptyQueue();
'use strict';

const Queue = require('bull');
const BalanceController = require('./controllers/external_API_controllers/balanceAPIControllers');
const JWTVerify = require('./utils/jwtFunctions');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const refundQueue = new Queue('refund_list', config.redisUrl);
refundQueue.process(async job => {
  const refund_amount = parseInt(job.data.refund_amount);
  const user_id = job.data.user_id;

  const token = await JWTVerify.createJWT(user_id);
  const refundResponse = await BalanceController.postRequest('refundBalance', { refund_amount }, token); 
  return console.log(refundResponse);
});

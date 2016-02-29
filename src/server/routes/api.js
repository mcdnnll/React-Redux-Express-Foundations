const logger = require('../utils/logger').appLogger;

exports.testGet = function(req, res, next) {
  logger.log('trace', 'testGet(): Entered');
  res.status(200).send({text: 'API is functioning'});
  logger.log('trace', 'testGet(): Returning');
};

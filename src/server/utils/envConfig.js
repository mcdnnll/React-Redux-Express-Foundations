const config = require('config');
const cors = require('cors');
const logger = require('../utils/logger').appLogger;

/**
 * Switch bundle paths when using webpack-dev-server
 * and configure cors to allow proxying of the
 * requests to real backend.
 */
module.exports = function envConfig(app) {
  if (process.env.NODE_ENV === 'production') {
    logger.log('info', 'Running in production environment');
    app.set('staticPath', config.endpoints.static);
    app.use(cors({
      origin: config.endpoints.web,
      credentials: true,
    }));
  } else {
    logger.log('info', 'Running in development environment');
    app.set('staticPath', config.endpoints.proxy_static);
    app.use(cors({
      origin: config.endpoints.webpack,
      credentials: true,
    }));
  }
};

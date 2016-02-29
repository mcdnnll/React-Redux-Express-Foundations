const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSanitizer = require('express-sanitizer');
const logger = require('./utils/logger').appLogger;
const errorHandler = require('./utils/errorHandler');
const web = require('./routes/web');
const api = require('./routes/api');

// Create app and configure environment
const app = express();
require('./utils/envConfig')(app);

logger.log('info', 'Starting webserver...');

app.set('views', config.dir.server + 'views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(expressSanitizer());

// Server static content
app.use('/static', express.static('build/dist'));

// Initialise logging middleware
app.use((req, res, next) => {
  logger.log('info', '%s %s %s', req.ip, req.method, req.url);
  next();
});

// API routes
app.get('/api/testGet', api.testGet);

// Web routes
app.get('/', web.index);

// Error handling middlware
app.use(errorHandler);

// Start server
app.listen(config.ports.web, config.host, () => {
  logger.log('info', 'Web Server running @ ' + config.endpoints.web + ' ' + config.ports.web);
});

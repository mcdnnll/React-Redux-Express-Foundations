const config = require('config');
const path = require('path');
const fs = require('fs');
const errType = require('../utils/constants');

exports.index = (req, res, next) => {

  const staticpath = req.app.get('staticPath');
  const pageTitle = 'React-Redux-Express Foundations';
  let appBundle, styleBundle;

  // Use cache busting when in production - bundle names will be hashed via webpack.
  if (process.env === 'production') {
    const bundleDistPath = path.join(__dirname, '../../..', config.dir.dist);

    // Read hashed bundle names
    fs.readFile(bundleDistPath + 'bundles.json', (fsErr, data) => {

      if (fsErr) {
        const err = {
          type: errType.STATIC_RESOURCE_ERROR,
          message: 'Sorry, the server was unable locate static resources. Please try again later.',
        };
        next(err);
      } else {

        const bundleNames = JSON.parse(data);
        appBundle = bundleNames.app.js;
        styleBundle = bundleNames.styles.js;

        // Return rendered view to the client
        res.render('index', {
          title: pageTitle,
          bundle: staticpath + '/' + appBundle,
          styles: staticpath + '/' + styleBundle,
          staticpath: staticpath,
        });
      }
    });

  // In dev use generic bundle names, allowing webpack dev server to manage bundles in memory.
  } else {
    appBundle = 'app.bundle.js';
    styleBundle = 'styles.bundle.js';

    res.render('index', {
      title: pageTitle,
      bundle: staticpath + '/' + appBundle,
      styles: staticpath + '/' + styleBundle,
      staticpath: staticpath,
    });

  }
};

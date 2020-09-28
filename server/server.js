'use strick';
const config = require('config');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors(), compression());

const appConfig = {};
const scrapperConfig = {};

if (config.has('appConfig')) {
  appConfig.port = config.appConfig.port;
  scrapperConfig.url = config.scraperConfig.url;
  scrapperConfig.totalPages = config.scraperConfig.totalPages;
} else {
  throw new Error('no config file');
}

routes(app, scrapperConfig);

app.listen(appConfig.port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`
    ################################################
        Server listening on port: ${appConfig.port}
    ################################################
  `);
});

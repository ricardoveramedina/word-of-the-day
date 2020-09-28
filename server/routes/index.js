const Fetcher = require('../controllers/fetcher');

const routes = (app, scrapperConfig) => {
  app.get('/randomWord', (req, res) => {
    //fetcher(scrapperConfig.url, scrapperConfig.totalPages);
    fetcher = new Fetcher(scrapperConfig);
    fetcher.fetchWord().then((data) => res.send(data));
  });
};

module.exports = routes;

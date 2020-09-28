const axios = require('axios');
exports.fetchData = (url) => {
  return axios.get(url).then((res) => res.data);
};

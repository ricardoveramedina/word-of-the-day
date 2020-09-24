const axios = require('axios');

const fetchData = (url) => {
    return axios.get(url).then((res) => res.data);
};

module.exports = { fetchData };

const exampleHTML = require('./exampleHtml');

const fetchData = (url) => {
    //return Promise.resolve("<html> title='Jisho'  company </html>");
    return Promise.resolve(exampleHTML);
};

exports.fetchData = fetchData;

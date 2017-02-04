const axios = require('axios');
const cheerio = require('cheerio');

const fetchComic = () => {
  return axios.get('http://www.hs.fi/sarjakuvat/')
    .then((response) => {
      const $ = cheerio.load(response.data);
      return `http:${$('.cartoon img')[0].attribs['data-original']}`;
    })
};

module.exports = {
  fetchComic,
};

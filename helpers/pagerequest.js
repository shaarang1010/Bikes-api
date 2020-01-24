const axios = require('axios');
const scraper = require('./scraper');


async function scrapePage()
{
    console.log('Scrapping Page ... ');
    axios.get('https://www.trekbikes.com/au/en_AU/bikes/road-bikes/c/B200/')
    .then((response)=>{
        //console.log(response.data);

      await scraper.scrapePage(response.data, '.product-tile__wrap');
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports.scrapePage = scrapePage;


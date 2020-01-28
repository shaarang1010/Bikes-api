const axios = require('axios');
const scraper = require('./scraper');


function scrapePage()
{
    console.log('Scrapping Page ... ');
    axios.get('https://www.trekbikes.com/au/en_AU/bikes/mountain-bikes/c/B300/?pageSize=72&q=%3Arelevance#')
    .then((response)=>{
        //console.log(response.data);
        scraper.scrapePage(response.data, '.product-tile__wrap');
      //await scraper.scrapePage(response.data, '.product-tile__wrap');
    })
    .catch(err=>{
        console.log(err);
    })
}

scrapePage();

//module.exports.scrapePage = scrapePage;


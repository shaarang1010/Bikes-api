const axios = require('axios');
const scraper = require('./scraper');


axios.get('https://www.trekbikes.com/au/en_AU/bikes/road-bikes/c/B200/')
    .then((response)=>{
        //console.log(response.data);

        scraper.scrapePage(response.data, '.product-tile__wrap');
    })
    .catch(err=>{
        console.log(err);
    })
const cheerio = require('cheerio');

const fs = require('fs');

const scrapePage = (arg, elem) =>{
    const $ = cheerio.load(arg);

    const elements = $(elem);

    let bikes=[];
    for (let i = 0; i < elements.length; i++){
        const findEle = $(elements[i]).find('a.product-tile__link');
        let element = {}
        if(findEle[1] !== undefined){
            element = findEle[1];
        }
        else{
            element = findEle[0];
        }
        if(element){
            let data = {
                'bikeTitle': element.attribs['title'],
                'bikeBrand': element.attribs['data-brand'],
                'category': element.attribs['data-category-name'],
                'price': parseFloat(element.attribs['data-price'])
            }
            console.log(element.attribs);
            const imgFile = $(findEle).find('img.product-tile__image.lazyload');
            data['image'] = imgFile[0].attribs['data-src']; 
            console.log(imgFile[0].attribs['data-src']);
            bikes.push(data);
        }
    }
    console.log("BIKES -------------- ");
    console.log(bikes);
}

module.exports.scrapePage = scrapePage;
const cheerio = require('cheerio');

const fs = require('fs');

const bikesController = require('../controller/bikeController');

const Bikes = require('../models/bike');


const cleanString = (string) =>{
    return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
}

const scrapePage = async (arg, elem) =>{
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
                'bikeTitle': cleanString(element.attribs['title']),
                'bikeBrand': element.attribs['data-brand'],
                'category': 'mountain',
                'subCategory': cleanString(element.attribs['data-category-name']),
                'price': parseFloat(element.attribs['data-price'])
            }
            const imgFile = $(findEle).find('img.product-tile__image.lazyload');
            data['image'] = imgFile[0].attribs['data-src']; 
            //console.log(imgFile[0].attribs['data-src']);
            bikes.push(data);
        }
    }
    //console.log(bikes.length);
    try{

    /**Write Concern mongodb https://docs.mongodb.com/manual/reference/write-concern/ */
    
    const result = await Bikes.insertMany(bikes,{ writeConcern: { w: 2, j: true, wtimeout: 5000 } });
    
    //console.log(bikes);
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.scrapePage = scrapePage;
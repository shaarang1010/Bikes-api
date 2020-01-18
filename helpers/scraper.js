const cheerio = require('cheerio');

const fs = require('fs');

const scrapePage = (arg, elem) =>{
    const $ = cheerio.load(arg);

    const elements = $(elem);

    let bikes=[];

    //console.log(typeof(elements));
    for (let i = 0; i < elements.length; i++){
        const findEle = $(elements[i]).find('a.product-tile__link');
        if(findEle){
            /*for(let j = 0; j < findEle.length; j++){
                // take attrib from the element

                console.log(findEle[j].attribs);
                const imgFile = $(findEle[j]).find('img.product-tile__image');
                console.log(imgFile);
            }*/
            console.log(findEle[1].attribs);
            const imgFile = $(findEle).find('img.product-tile__image.lazyload');
            console.log(imgFile[0].attribs['data-src']);

            break;
        }
    }
}

module.exports.scrapePage = scrapePage;
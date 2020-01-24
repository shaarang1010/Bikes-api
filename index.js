const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./db');

const scrape = require('./helpers/pagerequest');

dotenv.config();  // initialize the the env setup 

//parse request for content-type = application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//parse requests of content-type - application/json
app.use(bodyParser.json())



db.connectDB(`${process.env.CONNECTION_URL}`).then(async ()=>{
    app.listen(err=>{
        if(err){
            return console.log(err);
        }
        console.log(`${process.env.DATABASE_NAME}`);
        console.log(`Server listening on port -> ${process.env.PORT}`);
        //scrape.scrapePage().then((data=>{})).catch((err)=>{});
    });    
})
.catch((err)=>{
    console.log(err);
});
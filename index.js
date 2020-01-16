const express = require('express');
const app = express();
const port = '3000';





app.listen(port, err=>{
    if(err){
        return console.log(err);
    }

    console.log(`Server listening on port -> ${port}`)
});
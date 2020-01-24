const express = require('express');

const bikesModel = require('../models/bike');

const router = express();


router.get('/bikes', async (req, res) =>{
    let bikes = []; 
    await bikesModel.getBikes().then(data =>{
        bikes = data;
    })
    .catch(err =>{
        console.error(err);
    })

    try{
        res.json(bikes);
    }
    catch(err){
        res.status(500).send(err);
    }
});


router.post('/bikes', async (req,res) =>{
    const bikes = new bikesModel(req.body);
    
    try{
        await bikes.save();
        res.json(bikes);
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;
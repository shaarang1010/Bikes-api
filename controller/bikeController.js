const Bike = require('../models/bike');


/* 
*  Create a single Bike record. Takes an object of bike and inserts into BikeList collection
*/ 
exports.create = (req,res) => {
    if(!req.body.data){
        return res.status(400).send({
            message: 'Incorrect request!'
        })
    }

    const bike = new Bike(req.body.data);

    bike.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        console.error(err);
        res.status(500).send({message: err});
    })
}

/* 
*  Insert Bulk records. Will take an array of bikes and insert in the BikeList collection
*/ 
exports.upload = (list) =>{
    if(list.length === 0){
        return res.status(400).send({
            message: 'Incorrect request!'
        })
    }

   Bike.insertMany(list).then(data=>{
       console.log(data);
       res.status(200).send('Records inserted');
   })
   .catch(err=>{
       console.error(err);
       res.status(500).send('Failed to insert records');
   });
}


/* 
*  Return all bikes list
*/ 
exports.list = async (req,res) =>{
    try{
        const bikeList = await Bike.find();
        res.send(bikeList);
    }
    catch(err){
        res.status(400).send({message:err});
    }
}

//single bike by id
exports.findOne = (req,res) =>{

}


// delete bike record

exports.delete = (req,res) =>{

}
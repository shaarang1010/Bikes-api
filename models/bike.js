const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    _updateID: {
        type: Schema.Types.ObjectId,
    },
    bikeTitle: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },
    bikeBrand: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        default: ''
    },
    category: {
        type: String,
        index: true,
        default: 'road',
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        index: true,
        trim: true
    }
},
{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
}
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
},
);


bikeSchema.statics.getBikes = function(){
    return new Promise((resolve, reject) => {
        this.find((err, data)=>{
            if(err){
                console.error(err);
                return reject(err);
            }

            resolve(data);
        })
    })
}

/*bikeSchema.statics.upload = function(data){
    return BikeList.insert(data, {ordered:false})
}*/


module.exports = mongoose.model('BikeList', bikeSchema);

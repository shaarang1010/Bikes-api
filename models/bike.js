const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
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
        trim: true
    },
    category: {
        type: String,
        index: true,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        index: true,
        trim: true
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

module.exports = mongoose.model('Bikes', BikeSchema);


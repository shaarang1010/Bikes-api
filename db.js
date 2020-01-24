const mongoose = require('mongoose');


const connectDB = (url) => {
    console.log("Connecting ..... ");
    return mongoose.connect(url, {useNewUrlParser: true});
}

module.exports.connectDB = connectDB;
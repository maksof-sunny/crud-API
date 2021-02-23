const mongoose = require('mongoose')

const Info = mongoose.Schema({
    name : String,
    rollno   :  String,
});

module.exports = mongoose.model("practice", Info);
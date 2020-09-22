const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: String,
    note: String,
});

const Day = mongoose.model('Day', daySchema);
module.exports=Day;
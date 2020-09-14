const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    description: String,
    completed: Boolean
});

const Items = mongoose.model('Items', itemSchema);
module.exports=Items;
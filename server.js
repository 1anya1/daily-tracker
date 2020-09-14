const express =require('express');
const mongoose = require('mongoose');

//Environment Variables 

const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3000


//ROUTES

const trackerController = require('./controllers/tracker.js');
app.use('/tracker', trackerController);
app.listen(PORT, () => {
    console.log( 'I\'m listening on', PORT)
})
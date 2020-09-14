const express =require('express');
const mongoose = require('mongoose');


//Environment Variables 

const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3000

//connection to Mongoose
const db = mongoose.connection
mongoose.connect(mongoURI, {userNewUrlParser:true},
    ()=>console.log("MongoDB is up and running:", mongoURI))

//Error in connection to Mongoose
db.on('error', err=>console.log(err.message + 'is mongod not running?'))
db.on('disconnected', ()=>console.log('mongoose is disconnected'))

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json());
//this will tell app to use this for displaying all static files.
app.use(express.static('public'))

//ROUTES

const trackerController = require('./controllers/tracker.js');
app.use('/tracker', trackerController);
app.listen(PORT, () => {
    console.log( 'I\'m listening on', PORT)
})
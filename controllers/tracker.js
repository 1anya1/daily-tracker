const express = require('express')
const router = express.Router();
const Items = require('../models/tracker.js')

//Index Route
router.get('/', (req,res)=>{
    Items.find({}, (err, foundItems)=>{
        res.json(foundItems)
    })
})
//Post Route
router.post('/', (req,res)=>{
    Items.create(req.body, (err, createdItem)=>{
        res.json(createdItem)
    })
})

module.exports =router;
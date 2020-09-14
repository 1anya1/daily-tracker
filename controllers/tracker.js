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
//Delete Route 
router.delete('/:id', (req,res)=>{
    Items.findByIdAndRemove(req.params.id, (err,deletedItem)=>{
        res.json(deletedItem)
    })
})
//Update Route
router.put('/:id', (req,res)=>{
    Items.findByIdAndUpdate(req.params.id, req.bosy, {new:true}, (err,updatedItem)=>{
        res.json(updatedItem)
    })
})

module.exports =router;
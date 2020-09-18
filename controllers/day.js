const express = require('express')
const router = express.Router();
const Day = require('../models/day.js')

//Index Route
router.get('/', (req,res)=>{
    Day.find({}, (err, foundDay)=>{
        res.json(foundDay)
    })
})
//Post Route
router.post('/', (req,res)=>{
    Day.create(req.body, (err, createdDay)=>{
        res.json(createdDay)
    })
})
//Delete Route 
router.delete('/:id', (req,res)=>{
    Day.findByIdAndRemove(req.params.id, (err,deletedDay)=>{
        res.json(deletedDay)
    })
})
//Update Route
router.put('/:id', (req, res)=>{
    Day.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDay)=>{
        res.json(updatedDay);
    });
});

module.exports =router;
const express = require('express')
const router = express.Router();
const Items = require('../models/tracker.js')

router.get('/', (req,res)=>{
    res.send('index');
})
router.post('/', (req,res)=>{
    Items.create(req.body, (err, createdItem)=>{
        res.json(createdItem)
    })
})

module.exports =router;
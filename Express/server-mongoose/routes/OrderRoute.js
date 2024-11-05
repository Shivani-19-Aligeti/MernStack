const express =require('express')
const router = express.Router();
const Orders = require('../models/OrderModel')


router.get('/all',async(req, res)=>{
    try {
        const Orders = await Orders.find()
          res.status(200).json(Orders)
         
    }
    catch(error) {
        res.status(500).json({message:error})
    }
})
module.exports =router
const express =require('express')
const router = express.Router();
const Users = require('../models/UserModel')


router.get('/all',async(req, res)=>{
    try {
        const Users = await Users.find()
          res.status(200).json(Users)
         
    }
    catch(error) {
        res.status(500).json({message:error})
    }
})

module.exports =router
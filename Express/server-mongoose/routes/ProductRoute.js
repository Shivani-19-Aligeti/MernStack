const express =require('express')
// const { models } = require('mongoose')
const Products = require ('../models/ProductsModel')
const router = express.Router();

router.get('/all',async(req, res)=>{
    try {
        const Products = await Products.find()
          res.status(200).json(Products)
         
    }
    catch(error) {
        res.status(500).json({message:error.message})
    }
})

router.post('/add', async (req,res)=>{
     try{
           const ProductData = new Products(req.body)
           const { title , img, price} = ProductData
           if (!title || !img || !price){
            res.status(401).json({message: "All fields required"})
           }
           const storedata = await ProductData.save()
           res.status(200).json(storedata)
     } catch(error){
            res.status(500).json({ message : error.message})

     }
})

router.put('/edit/:id' , async(req,res) => {
    try{
        const id = req.params.id
        const existingproduct = await Products.findOne({_id:id})
        if(!existingproduct){
            res.status(404).json({message: "Product not found!"})
        }
        const updateproduct = await Products.findOneAndUpdate(id, req.body ,{new:true})
        res.status(200).json(updateproduct)
    }catch(error){
        res.status(500).json({ message : error.message})

    }
})

router.delete('/delete/:id' , async(req,res) =>{
    try{
        const id = req.params.id
        const existingproduct = await Products.findOne({_id:id})
        if(!existingproduct){
            res.status(404).json({message: "Product not found!"})
        }
        const updateproduct = await Products.findByIdAnddelete(id)
        res.status(200).json({message : "product deleted"})
    }catch(error){
        res.status(500).json({ message : error.message})

    }

}
)
module.exports = router

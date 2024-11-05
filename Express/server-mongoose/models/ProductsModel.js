const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema({
 name:{
    type: String,
    require: true
 },
 img:{
    type: String,
    require: true
 },
 price:{
    type: Number,
    require: true
 }

})

const Products = mongoose.model("Products" , ProductsSchema)
module.exports = Products;
const mongoose = require('mongoose')
const OrdersSchema = new mongoose.Schema({
userid:{
    type : Number,
    require : true
},
productid:{
    type: Number,
    require : true,
    
},
orderprice: {
    type: Number,
    require : true
   

},

address:{
    type: String,
    require: false

}
})

const Orders = mongoose.model("Order" , OrdersSchema)
module.exports = Orders
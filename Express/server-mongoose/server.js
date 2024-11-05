const express = require('express')
const { config } = require('nodemon')
const app = express()
const port = 2000

const db = require('./config/db')
app.use(express.json())
const Products =require('./routes/ProductRoute')
//const User =require('./routes/UserRoute')
//const Order =require('./routes/OrderRoute')



 
app.get('/' ,(req, res) => res.status(200).json(
       {
        message: "Welcome"
       })
)
app.use('/products' , Products)
//app.use('/User' , User)
//app.use('/Order', Order)
app.listen(port,(() => console.log('listening on ${port}')))


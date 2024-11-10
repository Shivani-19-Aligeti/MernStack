const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Shivani:67890@in-aws.k72oo.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected' ,()=>
(console.log("DB Connected")
))
connection.on('error', ()=> (console.log("DB Error")))

module.exports = mongoose
// const db = reqire('./config/db')
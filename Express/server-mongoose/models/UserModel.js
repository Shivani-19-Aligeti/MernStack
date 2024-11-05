const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
name:{
    type : String,
    require : true
},

email:{
    type: String,
    require : true,
    unique : true
},
phno: {
    type: Number,
    require : true,
    unique: true

},
password: {
    type: String,
    require : true,
    //unique: true

},
address:{
    type: String,
    require: false

}
})

const Users = mongoose.model("User" , UsersSchema)
module.exports = mongoose
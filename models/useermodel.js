const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    Fullname: String,
    email:String,
    password:String,
    cart:{
        type: Array,
        default:[]
    },
    order:{
        type: Array,
        default:[]
    },
    isadmin:Boolean,
    contact:Number,
    address:String,

})

module.exports= mongoose.model("user","userSchema")
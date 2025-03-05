const mongoose = require("mongoose");



const ownerSchema = mongoose.Schema({
  Oname: {
        type: String,
        minlength: 2,
        trim:true
    },
    email:String,
    password:String,
   
   Product:{
        type: Array,
        default:[]
    },
   
   picture:String,
   gstin:String,

})
const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;
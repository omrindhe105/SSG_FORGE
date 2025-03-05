const mongoose = require("mongoose");



const ProductSchema = mongoose.Schema({
   image: Buffer,
    name:String,
    price:Number,
    description:String,
    category:String,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:{
      type:String,
      default:"#000000",
    }

    

})

module.exports= mongoose.model("Product",ProductSchema)
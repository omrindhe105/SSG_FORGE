const express= require("express")
const router = express.Router();


router.get("/",function(req,res){
  res.send("hey i am  productRouter ")
})


module.exports= router;
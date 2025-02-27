const express= require("express")
const router = express.Routerouter();


router.get("/",function(req,res){
  res.send("hey i am  ownersRouter ")
})


module.exports= router;
const express= require("express")
const router = express.Router();


router.get("/odetail",function(req,res){
  res.send("hey i am  ownersRouter ")
})


module.exports= router;
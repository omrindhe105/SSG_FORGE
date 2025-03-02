const express= require("express")
const router = express.Router();
const userSchema = require("../models/useermodel");
const user = require("../models/useermodel");


router.get("/",function(req,res){
  res.send("hey i am  userRouter ")
})

router.post("/register",async function(req,res){
  let { Fullname,email,password}= req.body;

  try{
    let user = await userSchema.create({
      Fullname,
      email,
      password
  
    });
    res.send(user);
    
  }

  catch(err){
     console.log(err.message)
  }
})
module.exports= router;
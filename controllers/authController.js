
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const{generateToken}= require("../utils/token");
const userSchema = require("../models/useermodel");


module.exports.registerUser = function (req, res) {
 try {
  
      let { Fullname, email, password } = req.body;
  
      //generate  salt and mixed with user password
      bcrypt.genSalt(10, function (err, hash) {
        bcrypt.hash(password, hash, async function (err, hash) {
          if (err) return res.send(err.message)
          else {
            let existUser = await userSchema.findOne({ email });
            //checks user with given email exist or not
            if (existUser) return res.send("user already exist")
            else {
              let user = await userSchema.create({
                Fullname,
                email,
                password: hash,
  
              });
              
              let token = generateToken(user);
              res.cookie("token",token);
             res.send("user created successfuly");
            }
  
           
           
          }
        })
      })
  
  
  
    }
  
    catch (err) {
      console.log(err.message)
    }
}

module.exports.userLogin = async function(req,res){
    try{
        let {email,password}=req.body;
        
        let user=await userSchema.findOne({email});

        if(!user) return res.send("user not found")

        bcrypt.compare(password,user.password,function(err,result){
            res.send("login successful")
        })

       
    }    
    catch(err){
       console.log(e.message)
    }
}
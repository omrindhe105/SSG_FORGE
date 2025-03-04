const express = require("express")
const router = express.Router();
const userSchema = require("../models/useermodel");
const user = require("../models/useermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




router.get("/", function (req, res) {
  res.send("hey i am  userRouter ")
})

router.post("/register", function (req, res) {


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
            res.send("user created Successfully");
          }

          let token = jwt.sign({email,user:user._id},"abcdefghijklmnopqrstuvwxys");
          res.cookie("token",token);
         console.log(token);
         
        }
      })
    })



  }

  catch (err) {
    console.log(err.message)
  }
})
module.exports = router;
// end
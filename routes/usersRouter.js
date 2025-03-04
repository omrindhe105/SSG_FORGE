const express = require("express")
const router = express.Router();
const {registerUser,userLogin} = require("../controllers/authController")




router.get("/", function (req, res) {
  res.send("hey i am  userRouter ")
})

router.post("/register", registerUser)
router.get("/login",userLogin)
module.exports = router;
// end
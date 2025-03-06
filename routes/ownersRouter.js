const express = require("express")
const router = express.Router();
const ownerModel = require("../models/ownerSchema");
const upload = require("../config/multer-config")
const {createProduct} = require("../controllers/createProduct")




router.get("/admin", function (req, res) {
 
  let success = req.flash("success");
  console.log(success);
  res.render("admin",{success})
})

router.get("/create-Product", function (req, res) {
  res.render("create-Product")
})



router.post("/submit-Product", upload.single("image"), createProduct);



if (process.env.NODE_ENV == "development") { // this route will works only when env will be developement

  router.post("/create", async function (req, res){
    try {
      const existingOwner = await ownerModel.findOne();//to find owner exist or not
      const { Oname, email, password,gstin } = req.body;// to acess the data from input form
     

      //if owner exist print owner exist else create owner
     if(existingOwner){
      return res.status(503).json({message:"Owner already exist"})
     }
     else{
      let owner = await ownerModel.create({
        Oname,
        email,
        password,
        gstin
      });
      res.status(201).json({ message: "Owner created successfully", owner });
     }
     
      // res.status(201).json({ message: "Owner created successfully", owner });
    } catch (error) {
      console.error("Error creating owner:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  
  });
}
module.exports = router;
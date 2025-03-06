const express= require("express")
const router = express.Router();
const upload = require("../config/multer-config");
const productSchema = require("../models/productSchema");


router.get("/shop", async (req, res) => {
  let products = await productSchema.find(); // Fetch products from database
 
  res.render("shop", { Products: products }); // Pass Products as an array
});


module.exports= router;
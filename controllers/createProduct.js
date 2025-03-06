const Product = require("../models/productSchema");
const flash = require("connect-flash")

module.exports.createProduct = async function (req, res) {
    try {
        const { name, price, description, category, discount, bgColor } = req.body;
        const imageBuffer = req.file ? req.file.buffer : null;

      
        const product = await Product.create({
            name,
            price,
            description,
            category,
            discount,
            bgColor,
            image: imageBuffer
        });

      req.flash("success","product created succesfully")

     res.redirect("/owner/admin")  
    

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

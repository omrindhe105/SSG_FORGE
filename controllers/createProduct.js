const Product = require("../models/productSchema");

module.exports.createProduct = async function (req, res) {
    try {
        const { name, price, description, category, discount, bgColor } = req.body;

        // Ensure multer is configured correctly, and req.file exists
        const imageBuffer = req.file ? req.file.buffer : null;

        // Await product creation
        const product = await Product.create({
            name,
            price,
            description,
            category,
            discount,
            bgColor,
            image: imageBuffer
        });

        // Send JSON response with the created product
        res.status(201).json({ message: "Product created successfully", product });

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

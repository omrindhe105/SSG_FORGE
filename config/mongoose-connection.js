const mongoose = require("mongoose");
const dbgr = require("debug")("developement:mongoose")


const config = require('config');


const mongoURI = config.get("mongUri");

mongoose.connect(mongoURI)
.then(() => dbgr("✅ Connected to MongoDB..."))
.catch((err) => dbgr("MongoDB connection error:", err));

module.exports =mongoose ;
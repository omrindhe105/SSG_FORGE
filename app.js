const cookieParser = require('cookie-parser')
const express = require('express')
const db = require("./config/mongoose-connection")
const path = require("path")
const app = express()
const expressSession = require("express-session")
const flash = require("connect-flash")
const ownersRouter= require("./routes/ownersRouter");
const ProductsRouter= require("./routes/ProductsRouter");
const usersRouter= require("./routes/usersRouter");
const index = require("../SSG_Forge/routes/index");
require("dotenv").config();

const port = 4000

// basic setup to  access file from public folder and ejs

app.use(express.json());
app.use(express.urlencoded({extended:true} ));
app.use(cookieParser());
app.use(
  expressSession({
    secret: "abcdefghijklmnopqrstuvwxys",
    resave: false,
    saveUninitialized: true,
  })
)

app.use(flash())
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");

app.use("/owner",ownersRouter);
app.use("/user",usersRouter);
app.use("/Products",ProductsRouter);
app.use("/home",index);//index.js



console.log("Current NODE_ENV:", process.env.NODE_ENV);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


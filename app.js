

const cookieParser = require('cookie-parser')
const express = require('express')
const db = require("./config/mongoose-connection")
const path = require("path")
const app = express()
const ownersRouter= require("./routes/ownersRouter");
const productsRouter= require("./routes/productsRouter");
const usersRouter= require("./routes/usersRouter");

const port = 4000

// basic setup to  access file from public folder and ejs

app.use(express.json());
app.use(express.urlencoded({extended:true} ));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");

app.use("/owner",ownersRouter);
app.use("/user",usersRouter);
app.use("/products",productsRouter);


//require routes

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


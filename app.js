const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
dotenv.config({ path: "./config.env" });
// let database = require("./src/connection");
const app = express();
app.use(cors());

// middle ware 
app.use(bodyParser.json());

app.use(require("./src/routes"));

app.use('/static',express.static("Public"));

// view engine
app.set('view engine', 'ejs');

app.listen(2000, () => {
    console.log("Server running on 2000");
})
let connection = require("../app.js");
const express = require("express");
// const dbConnection = require("./connection");
const session = require("express-session");
const route = express.Router();

route.get("/insertData", async (req, res) => {

    try {

        const collection = dbConnection.db("nodeproject");
        const database = collection.collection("Hierarchymaster");

        // insert many data

        // const result = await database.insertMany([
        //     {name:"Vinay",age:22,email:"vinay@gmail.com",Password:"Vinod@123"},
        //     {name:"Sapna", age: 24, email: "sapna@gmail.com",Password:"Sapu@123"}
        // ]);

        // find data

        // const result = await database.find({ age: { $gte: 25 } }).toArray();

        // update data 

        // const result = await database.updateOne({name:"Vinay"},{$set:{age:21}});

        // delete data

        // const result = await database.deleteOne({name:"Sarin"});



        res.status(200).json({
            message: "Data inserted Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

// login api for home page 

route.post("/api/login_into_home", async function (req, res) {

    try {

        let user_id = req.body.username;
        let pass_id = req.body.password;

        const collection = dbConnection.db("nodeproject");
        const database = collection.collection("Hierarchymaster");

        const query = { email: user_id, password: pass_id };
        const result = await database.find(query).toArray();

        console.log(result);

        if (user_data == "true") {
            res.send(200);
        } else {
            res.send(300);
        }

    } catch (error) {
        console.log(error);
    }

});

// Home page

route.get("/Home", async (req, res) => {

    try {

        res.render("Home.ejs");
 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

module.exports = route;
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "my_app",
    password : "samarth@123",
});

let getRandomUser = ()=>{
    return[
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ]
}

    app.get("/", (req,res) => {
        let q = `SELECT count(*) FROM user`;
        try{
            connection.query(q,(err,result) => {
                if(err) throw err;
                let count = result[0]["count(*)"];
                res.render("home.ejs", {count});
            })
        } catch(err){
            // console.log(err);
            res.render("some error is come in database");
        }
    });


app.listen("8080", () => {
    console.log("server is working well");
});
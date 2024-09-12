const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended : true})); //data pase as a redabal formate
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

    //show all user
    app.get("/users", (req,res) =>{
        let q = `SELECT * FROM user ORDER BY username ASC`;
        try{
            connection.query(q,(err,result) => {
                if(err) throw err;
                res.render("showUsers.ejs", {result});
            });
        } catch(err){
            res.render("some error found");
        }
    });

    //edit form open 
    app.get("/users/:id/edit", (req,res) => {
        let {id} = req.params;
        let q = `SELECT * FROM user WHERE id = '${id}'`;
        try{
            connection.query(q,(err,result) => {
                if(err) throw err;
                let user = result[0];
                res.render("edit.ejs", {user});
            });
        } catch(err){
            res.render("some error found");
        }
    });

    //update in DB 
    app.patch("/users/:id", (req,res) => {
        let {id} = req.params;
        let {password : formpass, username : newusername} = req.body;
        let q = `SELECT * FROM user WHERE id = '${id}'`;

        try{
            connection.query(q,(err,result) => { //comper query
                if(err) throw err;
                let user = result[0];
                if(formpass != user.password){
                    res.send("rong password");
                }
                else{
                    //update query
                    let q2 = `UPDATE user SET username= '${newusername}' WHERE id = '${id}'`;
                    try{
                        connection.query(q2,(err,result) => {
                            if(err) throw err;
                            res.redirect("/users");
                        });
                    } catch(err){
                        res.send("some error found");
                    }
                }
            });
        } catch(err){
            res.send("some error found");
        }
    });

    //add new
    app.get("/user/new", (req, res) => {
        res.render("new"); // This will render new.ejs when the "New" button is clicked
    });    

    //update databse
    app.post("/user/new", (req, res) => {
        console.log("Request body:", req.body); // Log the entire request body for debugging
        let { username, email, password } = req.body;
        let id = uuidv4();
        let q = `INSERT INTO user(id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;

        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                console.log("Added new user");
                res.redirect("/users");
            });
        } catch (err) {
            res.send("An error occurred: " + err.message);
        }
    });    


    //delete user
    app.get("/user/:id/delete", (req,res) => {
        let {id} = req.params;
        let q = `SELECT * FROM user WHERE id = '${id}'`
        try{
            connection.query(q, (err, result) => {
                if (err) throw err;
                let user = result[0];
                res.render("delete.ejs" , {user});
            });
        } catch (err) {
            res.send("An error occurred: " + err.message);
        }
    })

    app.delete("/user/:id" , (req,res) => {
        let {id} = req.params;
        let {password} = req.body;
        let q = `SELECT * FROM user WHERE id = '${id}'`;
        try{
            connection.query(q, (err, result) => {
                if (err) throw err;
                let user = result[0];
                
                if(password != user.password){
                    res.send("your password is incorrect");
                }else{
                    let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
                    connection.query(q2, (err, result) => {
                    if (err) throw err;
                    else {
                        console.log(result);
                        console.log("deleted!");
                        res.redirect("/users");
                    }
                    });
                } 
            });
        } 
        catch (err) {
            res.send("An error occurred: " + err.message);
        }
    });

app.listen("8080", () => {
    console.log("server is working well");
});
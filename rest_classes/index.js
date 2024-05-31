const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));
let posts = [
    {
        username :  "samarth",
        content  : "I love coding"
    },
    {
        username :  "soham",
        content  : "he love coding",
    },
    {
        username :  "fenil",
        content  : "he love reding"
    },
];
//creat a posts
app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts});    
});
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs", {posts});    
});
app.use(express.urlencoded({ extended: true }));
//after submit add post
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    posts.push({username,content}); //add newe post in array object
    //connect two page
    //after submit retun back posts
    res.redirect("/posts");
});

app.listen(port,()=> {
    console.log("port is start");
});
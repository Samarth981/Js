const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); //require uuid for creat id autometicaly
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
let posts = [
    {
        id : uuidv4(),
        username :  "samarth",
        content  : "I love coding"
    },
    {
        id : uuidv4(),
        username :  "soham",
        content  : "he love coding",
    },
    {
        id : uuidv4(),
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
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//after submit add post
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id, username,content}); //add newe post in array object
    //connect two page
    //after submit retun back posts
    res.redirect("/posts");
});
app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
}); 
//update a content
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
//edit content
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.listen(port,()=> {
    console.log("port is start");
});
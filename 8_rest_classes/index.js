const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); //require uuid for creat id autometicaly
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public"))); //in the public app.use
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

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

//to render form
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs", {posts});    
});

//after submit form & add post
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id, username,content}); //add newe post in array object
    //connect two page
    //after submit retun back posts
    res.redirect("/posts");
});

//give indivisual post
app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);  //indivisual post id if mach then render 
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


//delete post
app.delete("/posts/:id", (req,res)=> {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id); //particular delete post is not add in (filter) in new array and new array(not same id posts in array) assine in posts
    res.redirect("/posts");
})

app.listen(port,()=> {
    console.log("port is start");
});
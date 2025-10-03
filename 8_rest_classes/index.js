const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //require uuid for create id automatically
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "samarth",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "soham",
    content: "he love coding",
  },
  {
    id: uuidv4(),
    username: "fenil",
    content: "he love reding",
  },
];

//to render form
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//create a posts
app.get("/posts/new", (req, res) => {
  res.render("new.ejs", { posts });
});

//after submit form & add post
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });
});

//edit content
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

//update a content
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

//delete post
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id); //particular delete post is not add in (filter) in new array and new array(not same id posts in array) asin in posts
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`port is start on port ${port}`);
});

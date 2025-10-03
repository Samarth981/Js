const express = require("express");
const app = express();
const path = require("path");
const instaData = require("./data.json");

const port = 8080;

app.use(express.static(path.join(__dirname, "public"))); //searching static files include fixed path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //set fixed path

app.get("/", (req, res) => {
  res.render("home.ejs"); //express finding by default -> views folder -> search for home.ejs
});

//using database concept
app.get("/rolldice", (req, res) => {
  let dicVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { number: dicVal }); //object form
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//query
//Like I am see in instagram search/q?="apple"//q is query
app.get("/search", (req, res) => {
  //passing for req is store in query
  let { q } = req.query;
  res.send(`search results for query: ${q}`);
});

//instagram example
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const data = instaData[username];
  if (data) {
    res.render("insta.ejs", { data });
    // console.log(data);
  } else {
    res.render("error.ejs");
  }
});

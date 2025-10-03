const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); //express read for urlencoded data
app.use(express.json()); //body through req send form of json then handel req

app.get("/submit", (req, res) => {
  let { user, pass } = req.query; //form data is come as a query string
  res.send(`standard GET response, welcome ${user}!`);
});

app.post("/submit", (req, res) => {
  let { user, pass } = req.body;
  res.send(`standard POST response, welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listing to port ${port}`);
});

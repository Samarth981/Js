const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//logger -> morgen
app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toString(); //current res time
  console.log("middleware is call");
  console.log(req.method, req.path, req.responseTime, req.hostname);
  next();
});

//if request go to the individual path. this types of middleware use in access specific users
//error throw individual not a by default
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveAccess") {
    next();
  }
  // throw new Error('Access is DENIED!'); 

  //use ExpressError class
  throw new ExpressError(401, "Access is DENIED!");
};

//root
app.get("/", (req, res) => {
  res.send("This is a root");
});

//random
// /random?token = giveAccess
app.get("/random", checkToken, (req, res) => {
  res.send("This is a random");
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access is denied");
});

//second rout by default error throw
// app.use((req, res) => {
//   res.send('page is not found');
//   res.status(404).send('page is not found'); //verify in hopscotch
// });

//custom error handle
app.use((err, req, res, next) => {
  console.log(".........ERROR........");
  // next(err);

  // res.send(err); 
 
  let { status = 500, message = "Some error come" } = err; //default value
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server is start in port 8080");
});

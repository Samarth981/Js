const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

//logger -> morgen
app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toString(); //current res come time
  console.log('midelwar is call');
  console.log(req.method, req.path, req.responseTime, req.hostname);
  next();
});

//if request go to the indivisual path
//this types of midelware use in access specific users
///error throw indivisula not a by defult
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == 'giveAccess') {
    next();
  }
  // throw new Error('Access is DENIED!'); //if any error then pass this code in coustum error hendeler (line 46)

  //use ExpressError class
  throw new ExpressError(401, 'Access is DENIED!');
};

//root
app.get('/', (req, res) => {
  res.send('This is a root');
});

//random
// /random?tocan = giveAccess
app.get('/random', checkToken, (req, res) => {
  res.send('This is a randome');
});

app.get('/err', (req, res) => {
  abcd = acff;
});

app.get('/admin', (req, res) => {
  //give not parmison
  throw new ExpressError(403, 'Access is denied');
});

//404 //secound rout by defult error throw
// app.use((req, res) => {
//   //   res.send('page is not found');
//   res.status(404).send('page is not found'); //verifay in hoppscotch
// });

//coustum error hendle
app.use((err, req, res, next) => {
  console.log('.........ERROR........');
  // next(err);

  // res.send(err); //send expree

  //modifay
  // let { status, message } = err;

  let { status = 500, message = 'Some error come' } = err; //default value
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log('server is start in port 8080');
});

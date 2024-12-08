const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// app.use(cookieParser('SecratCode'));
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
//express session
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let sessionOption = {
  secret: 'SuperSecretString',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

//create meddlware for flash message
app.use((req, res, next) => {
  res.locals.errorMsg = req.flash('error');
  res.locals.successMsg = req.flash('success');
  next();
});

app.get('/register', (req, res) => {
  let { name = 'samarth' } = req.query;
  req.session.name = name;
  if (name === 'Samarth') {
    req.flash('error', 'not register');
  } else {
    req.flash('success', 'thaks for register');
  }
  res.redirect('/hello');
});

app.get('/hello', (req, res) => {
  res.render('page.ejs', {
    name: req.session.name,
  });
});

//count for sem user homany time visite in web
//this is store as a tempaory
//this is not designed for a production environment
app.get('/reqCount', (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`user coming ${req.session.count} times in this web`);
});

// //check signed cookies
// app.get('/checkSingedCookie', (req, res) => {
//   res.cookie('ABC', 'hello world', { signed: true });
//   res.send('cookies is sent');
// });

// //verify Cookies
// app.get('/varify', (req, res) => {
//   console.log(req.signedCookies); // Corrected here
//   res.send('verified!');
// });

// //cookie is send
// app.get('/checkCookie', (req, res) => {
//   res.cookie('xyz', 'this is check');
//   res.send('done!');
// });

// app.get('/', (req, res) => {
//   console.dir(req.cookies);
//   res.send('Hii, I am root');
// });

app.listen(8080, () => {
  console.log('server is started on port 8080');
});

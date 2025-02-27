const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./model/chat.js');
const { create } = require('domain');
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main()
  .then(() => {
    console.log('server is start');
  })
  .catch(() => {
    console.log(err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fackWhatsapp');
}

// let chat1 = new Chat({
//     from : "raj",
//     to : "samarth",
//     msg : "what are you doing",
//     created_at : new Date(),
// });

// chat1.save()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//index route
app.get('/chats', async (req, res) => {
  let chats = await Chat.find();
  res.render('index.ejs', { chats });
});

//new rout
app.get('/chats/new', (req, res) => {
  res.render('new.ejs');
});

app.post(
  '/chats',
  asyncWrap(async (req, res, next) => {
    let { from, msg, to } = req.body;
    let newchat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    // newchat
    //   .save()
    //   .then((res) => console.log('chat is saved'))
    //   .catch((err) => console.log(err));
    await newchat.save();
    res.redirect('/chats');
  }),
);

//update rout
app.get('/chats/:id/edit', async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render('edit.ejs', { chat });
});

app.put(
  '/chats/:id',
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true },
    );
    res.redirect('/chats');
    console.log(updatedChat);
  }),
);

//show route(exmple of midleware)
// app.get('/chats/:id', async (req, res, next) => {
//   let { id } = req.params;
//   let chat = await Chat.findById(id);
//   if (!chat) {
//     // throw new ExpressError(404, 'Chat not found');
//     next(new ExpressError(505, 'Chat not found'));
//   }
//   res.render('edit.ejs', { chat });
// });

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//use asyncwrap function to handle err
app.get(
  '/chats/:id',
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, 'Chat not found');
      next(new ExpressError(404, 'Chat not found'));
    }
    res.render('edit.ejs', { chat });
  }),
);

//DELET
app.delete('/chats/:id', async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect('/chats');
});

app.get('/', (req, res) => {
  res.send('root is working');
});

//Error handling middlewares

//create fucntion for handal CastError
const handalCastErr = (err) => {
  console.log('this is CastError error show');
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === 'CastError') {
    // console.log('this is CastError error show');
    err = handalCastErr(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  let { status = '500', message = 'some error occured' } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log('server is start on port 8080');
});

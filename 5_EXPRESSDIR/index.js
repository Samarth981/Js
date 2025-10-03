const express = require("express");
const app = express();
let port = 8080;
//incoming req listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
// console.log(req);
// console.log("request received");
// res.send({
//response send
//   name: "apple",
//   color: "red",
// });
//   let code = "<h1>fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//   res.send(code); //express allow only one time one send
// });

//https://github.com/hoppscotch/hoppscotch/discussions/2051 this is a use for browser extension

//app.use is listen all request
//same path response is come only one time one response

// app.get('/', (req, res) => {
//   res.send('Hello, I am a root');
// });
// app.get('/apple', (req, res) => {
//   res.send('you contacted apple path');
// });
// app.get('/orange', (req, res) => {
//   res.send('you contacted orange path');
// });
// app.get('*', (req, res) => {
//   // if not fount
//   res.send('This page dose not exist');
// });

// use for variable
app.post("/", (req, res) => {
  res.send("Hello, I am a root");
});

app.get("/:userName/:id", (req, res) => {
  console.log(req.params);
  let { userName, id } = req.params;
  res.send(`welcome to the page of @${userName}`);
});

//query string
app.get("/search", (req, res) => {
  console.log(req.query);
  if (!req.query.q) {
    res.send("nothing any query");
  } else {
    res.send(`This is query string check and query: ${req.query.q} `);
  }
});

//q access directly, not use req.query.q
// app.get("/search", (req, res) => {
//   let { q } = req.query;
//   if (!q) {
//     res.send("nothing any query");
//   } else {
//     res.send(`This is query string check and query: ${q} `);
//   }
// });

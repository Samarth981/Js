const express = require("express");
const app = express();
const port = 8080;
app.get("/submit", (req,res)=> {
    let {user,pass} = req.query;
    res.send(`standard GET response, welcome ${user}!`);
});
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.post("/submit", (req,res)=> {
    let {user,pass} = req.body;
    res.send(`standard POST response, welcome ${user}!`);
});
app.listen(port , ()=>{
    console.log("listing to port");
})



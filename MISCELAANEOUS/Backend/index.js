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


//new operator
function Person(name, age){  //constructor
    this.name = name;
    this.age = age;
    console.log(this);
}
//function use in prototype
Person.prototype.talk = function(){
    console.log("this is a talk function create in prototype");
}
//use new keyword , creat new object & pointing a prototype function
let p1 = new Person("samarth", 20);

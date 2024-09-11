const express =  require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname , "public"))); //serching static files include fixed path
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views")); //set fixed path


app.get("/",(req,res) =>{
    res.render("home.ejs");//epress finding by defult -> views folder -> search for home.ejs
});
app.get("/hello",(req,res) =>{
    res.send("hello");
});
// app.get("/rolldice" , (req,res) =>{
//     res.render("rolldice.ejs");
// });

//using databes concept
app.get("/rolldice" , (req,res) =>{
    let randomvalue = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs" , {number : randomvalue}); //object form
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


//query 
//Like I am see in instagram search/q?="apple"//q is query
app.get("/search",(req,res) => {
    // console.log(req.query);
    //passing for req is store in query
    let {q} = req.query;
    res.send(`search results for query: ${q}`);
});

//intagram exmple
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]; 
    if(data){
        res.render("insta.ejs", {data});
        // console.log(data);
    }else{
        res.render("error.ejs");
    }
});

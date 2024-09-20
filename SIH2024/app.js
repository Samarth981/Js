const  express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hii, I am root");
})


app.listen(8080, ()=> {
    console.log("serever is listening to port 8080");
});




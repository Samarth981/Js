const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./model/chat.js");
const { create } = require("domain");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().then(() => {
    console.log("server is start")
}).catch(() => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from : "raj",
    to : "samarth", 
    msg : "what are you doing",
    created_at : new Date(),
});
 
app.get("/", (req,res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is start on port 8080");
});
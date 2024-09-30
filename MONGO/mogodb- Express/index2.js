const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./model/chat.js");
const { create } = require("domain");
const methodOverride = require('method-override')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

main().then(() => {
    console.log("server is start")
}).catch(() => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
})

//new rout
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
})

app.post("/chats", (req,res) => {
    let {from , msg, to} = req.body;
    let newchat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    newchat.save()
        .then((res) => console.log("chat is saved"))
        .catch((err) => console.log(err));
    res.redirect("/chats");
});

//update rout
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})
app.put("/chats/:id", async (req,res) => { 
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    res.redirect("/chats");
    console.log(updatedChat);
});

//DELET
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.get("/", (req,res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is start on port 8080");
});
//this data store in chat database
const mongoose = require("mongoose");
const Chat = require("./model/chat.js");

main()
  .then(() => {
    console.log("server is start");
  })
  .catch(() => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fackWhatsapp");
}

let allChats = [
  {
    from: "samarth",
    to: "raj",
    msg: "what are you doing",
    created_at: new Date(),
  },

  {
    from: "samarth",
    to: "soham",
    msg: "where are you going",
    created_at: new Date(),
  },

  {
    from: "fenil",
    to: "vyom",
    msg: "wjich subject you have learn",
    created_at: new Date(),
  },

  {
    from: "khushi",
    to: "suchi",
    msg: "where are you going in vacation time",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

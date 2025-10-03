const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema of user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// // When you add methods to the schema (userSchema.methods.speak), they get attached to the prototype of the Model.
// userSchema.methods.speak = function speak() {
//   const greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// };

//create model
const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "samarth",
  email: "samarth123@gmail.com",
  age: 40,
});

//insert in db
user1
  .save() // return premisses
  .then((res) => {
    console.log(res);
    // user1.speak();
  })
  .catch((err) => {
    console.log("Error", err);
  });
// console.log(User.prototype); //speak() method check

//insert multiple data
User.insertMany([
  {
    name: "soham",
    email: "soham234@gmail.com",
    age: 30,
  },

  {
    name: "raj",
    email: "raj890@gmail.com",
    age: 19,
  },
  {
    name: "fenil",
    email: "fenil123@gmail.com",
    age: 60,
  },
])
  .then((result) => {
    console.log("All data store");
  })
  .catch((error) => {
    console.log(error);
  });

//find method return Query not promise but use  .then() call back
User.find({ age: { $gt: 20 } })
  .then((res) => {
    console.log("Query result:", res);
    // const uniqueUsers = new Set();
    // res.forEach((user) => {
    //   if (!uniqueUsers.has(user.name)) {
    //     console.log(user.name + " " + user.age);
    //     uniqueUsers.add(user.name);
    //   }
    // });
  })
  .catch((err) => {
    console.log(err);
  });

// //update
User.updateOne(
  { name: "samarth" },
  { age: 19 },
  { includeResultMetadata: true },
  { new: true } //give update document
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

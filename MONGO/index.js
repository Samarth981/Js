const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main()
  .then(() => {
    console.log('server is start');
  })
  .catch(() => {
    console.log(err);
  });

//Schema of user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//A Model User is like a class in object-oriented programming.
// When you add methods to the schema (userSchema.methods.speak), they get attached to the prototype of the Model.
userSchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name";
  console.log(greeting);
};

//creat model
const User = mongoose.model('User', userSchema);

//create data using uper schema
const user1 = new User({
  name: 'samarth',
  email: 'samarth123@gmail.com',
  age: 40,
});

//insert in db
user1
  .save() // return promisses
  .then((res) => {
    console.log(res);
    user1.speak();
  })
  .catch((err) => {
    console.log(err);
  });
console.log(User.prototype); //speak() metod check

//insert multipal data
User.insertMany([
  {
    name: 'soham',
    email: 'soham234@gmail.com',
    age: 30,
  },

  {
    name: 'raj',
    email: 'raj890@gmail.com',
    age: 19,
  },
  {
    name: 'fenil',
    email: 'fenil123@gmail.com',
    age: 60,
  },
])
  .then((result) => {
    console.log('All data store');
  })
  .catch((error) => {
    console.log(error);
  });

// //find method return Query not promise
User.find({ age: { $gt: 20 } })
  .then((res) => {
    console.log('Query result:', res);
    const uniqueUsers = new Set();
    res.forEach((user) => {
      if (!uniqueUsers.has(user.name)) {
        console.log(user.name + ' ' + user.age);
        uniqueUsers.add(user.name);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

//in my database some user name is dublicate shoe remove
// Function to remove duplicates
//https://www.youtube.com/watch?v=MWmMvudBgFU
async function removeDuplicates() {
  const duplicates = await User.aggregate([
    {
      $group: {
        _id: '$name',
        uniqueIds: { $addToSet: '$_id' },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ]);

  for (const doc of duplicates) {
    const uniqueIds = doc.uniqueIds;
    const firstId = uniqueIds[0]; // Keep the first ID
    const duplicateIds = uniqueIds.slice(1); // Get the rest of the IDs (duplicates)

    // Delete all documents with IDs in duplicateIds
    await User.deleteMany({ _id: { $in: duplicateIds } });
  }

  console.log('Duplicates removed');
}

removeDuplicates().catch((err) => {
  console.log(err);
});

//updat
User.updateOne(
  { name: 'samarth' },
  { age: 19 },
  { includeResultMetadata: true },
  { new: true }, //give update document
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

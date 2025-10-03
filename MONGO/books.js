const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("server is start");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },

  author: {
    type: String,
  },

  price: {
    type: Number,
    min: [1, "price is so low please change it"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title : "Student of the year",
//     author : "ramanujan",
//     price : "0",
//     category : "fiction",
// });
// book1.save()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err.errors.price.properties.message));

//if update value then use [option.run validator]
//{includeResultMetadata : true} use for give updated value

Book.findByIdAndUpdate(
  "66f8d8df2257a022c951f47b",
  { price: 125 },
  { author: "Rahul" },
  { title: "min cost" },
  { runValidators: true },
  { includeResultMetadata: true }
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

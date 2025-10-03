//approach 3
const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}
const userSchema = new Schema({
  name: String,
  email: String,
});
const postSchema = new Schema({
  content: String,
  like: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// const addData = async () => {
//   //   let user1 = new User({
//   //     name: 'Soham',
//   //     email: 'xyz123@gmail.com',
//   //   });

//   let user = await User.findOne({ name: 'Soham' });

//   let post1 = new Post({
//     content: 'hallow, this is test file',
//     like: 100,
//   });

//   post1.user = user;

  //   await user1.save();
//   await post1.save();

//   let post2 = new Post({
//     content: 'byy',
//     like: 10,
//   });

//   post2.user = user;

  //   await user1.save();
//   await post2.save();
// };

const getdateInfo = async () => {
  let result = await Post.findOne({}).populate('user');
  console.log(result);
};
getdateInfo();

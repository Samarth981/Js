const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
  .then(() => console.log('connection successfull'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}

const userSchema = new Schema({
  username: String,
  addresses: [{ _id: false, location: String, city: String }],
});

const User = mongoose.model('User', userSchema);

const addUser = async () => {
  let user1 = new User({
    username: 'samarth',
    addresses: [
      {
        location: 'xyz recidency',
        city: 'Surat',
      },
    ],
  });

  user1.addresses.push({ location: 'abc recidency', city: 'Surat' });

  let result = await user1.save();
  console.log(result);
};

addUser();

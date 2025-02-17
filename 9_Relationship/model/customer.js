const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
  .then(() => console.log('connection successfull'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}
const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  order: [{ type: Schema.Types.ObjectId, ref: 'Order' }], //https://mongoosejs.com/docs/populate.html
});

//after delete custome this middleware call
customerSchema.post('findOneAndDelete', async (customer) => {
  if (customer.order.length) {
    let result2 = await Order.deleteMany({ _id: { $in: customer.order } }); // Correct usage of Order and _id
    console.log(
      `Customer deleted after connected order also deleted: ${result2}`,
    );
  }
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

// const addOrder = async () => {
//   let res = await Order.insertMany([
//     {
//       item: 'chips',
//       price: 10,
//     },
//     {
//       item: 'somasa',
//       price: 15,
//     },
//     {
//       item: 'chocolate',
//       price: 5,
//     },
//   ]);
//   console.log(res);
// };
// addOrder();

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: 'samarth',
//   });

//   let order1 = await Order.findOne({ item: 'chips' });
//   let order2 = await Order.findOne({ item: 'chocolate' });

//   cust1.order.push(order1);
//   cust1.order.push(order2);

//   let result2 = await cust1.save();
//   console.log(result2);

//   let data = await Customer.find({});
//   console.log(data);

//populate
// let data = await Customer.find({}).populate('order');
//   console.log(data[0]);
// };
// addCustomer();

//function for deletion hendaling
// const addCust = async () => {
//   let newCust = new Customer({ name: 'karna Arjun' });
//   let newOrder = new Order({ item: 'pizza', price: 100 });

//   newCust.order.push(newOrder);

//   await newOrder.save();
//   await newCust.save();
//   console.log('add new cust');
// };

// addCust();

//i am delete customer
const deleteCust = async () => {
  let result = await Customer.findOneAndDelete('67505004d7f9e90588d3b262');
  console.log(`Customer deleted: ${result}`);
};

deleteCust();

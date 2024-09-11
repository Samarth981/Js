const { faker } = require('@faker-js/faker');

//random users come
// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     registeredAt: faker.date.past(),
//   };
// }

//100data so use
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// console.log(getRandomUser()); 


const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my_app",
    password: "samarth@123",
  });



// let query = "SHOW  TABLES";
// try{
//   connection.query(query , (err,results) => {       //result is a Array
//     if(err) throw err;
//     // console.log(results);
//     console.log(results.length);
//     console.log(results[0]);
//     console.log(results[1]);
//   });
// } catch(err){
//   console.log(err);
// };


//insert a data in Database
// let q2 = "INSERT INTO user (id, username, emial, password) VALUES (?,?,?,?)";
let q2 = "INSERT INTO user (id, username, emial, password) VALUES ?";
let user1 = ["1","samarth","samarth@123", "xyz"];
let users = [];



// try{
//   connection.query(q2 , user1,(err,results) => {       //result is a Array
//     if(err) throw err;
//     // console.log(results);
//     console.log(results.length);
//     console.log(results[0]);
//     console.log(results[1]);
//   });
// } catch(err){
//   console.log(err);
// };

//store data 100
for(let i=0;i<100;i++){
  users.push(getRandomUser());
}

try{
  connection.query(q2 , [users],(err,results) => {       //result is a Array
    if(err) throw err;
    console.log(results);
    // console.log(results.length);
    // console.log(results[0]);
    // console.log(results[1]);
  });
} catch(err){
  console.log(err);
};


//exit database
connection.end();



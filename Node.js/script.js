// Import the Math module from the current directory using require
const Math = require("./Math"); // require is a built-in function 
console.log(Math); // Output the Math module object
console.log(Math.sum(2, 5)); // Output the result of calling the sum function from the Math module

// Import the fruits module from the current directory using require
const fruits = require("./fruits"); // Require the module from the relative path
console.log(fruits); // Output the fruits module object
console.log(fruits[0].name); // Output the name of the first fruit in the fruits module
// Explanation of require behavior
// require tries to find the index.js file (entry point)
// index.js is a special file that require only finds this file.
// For example, in Java, main is an entry point (execution point)
//in bellow code use import and alredy exit pakage.json file so apper code not run give error 



// Importing modules using import statement (commented out)
// import gives flexibility for importing individual modules
// import {sum, PI} from "./Maths2.js" 
// console.log(sum(1,5));
// This gives an error because import is not used directly.
// To use import, first create a package.json file in the main directory and add type: module to it.
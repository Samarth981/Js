
//this file use into ather file than use for --> (module.exports) -> this is a object
//check script.js fille
const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;
// let obj =  {
//     sum : sum,
//     mul : mul,
//     g :  g,
//     PI : PI,
// };
// module.exports = obj;

//or

module.exports =  {
    sum : sum,
    mul : mul,
    g :  g,
    PI : PI,
};



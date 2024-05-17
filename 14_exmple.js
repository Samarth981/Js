//Q1

let array1 = [2,4,5,7,5,3,2];
let sequare = array1.map((num) => num*num);
console.log(sequare);
let total = array1.reduce((a,b)=> a+b);
let avg = total/array1.length;
console.log(avg);

//Q2
let add = array1.map((num) => num+5);
console.log(add);

//Q3
let array2 = ["samarth", "soham", "aman", "raj"];
console.log(array2.map((string)=> string.toUpperCase()));


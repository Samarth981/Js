let password = prompt('set your password'); // user enter
let newpassword = password.trim(); //store as a no space
console.log(newpassword); // print new without space

// UpperCase & LowerCase
let upper = password.toUpperCase();
console.log(upper);
let lower = password.toLowerCase();
console.log(lower);

//chaining
console.log(password.trim().toUpperCase()); // 1,2,3 line in code & code executed left to

//indexOf
let index = 'I love cording';
let ans = index.indexOf('cording'); // c is coming in 7 number & give number
// or
console.log(index.at(5)); // give string
console.log(ans);

//slice
let slice = index.slice(-2); // index.length-2 --> output->ng
console.log(slice);
console.log(`if 2 then come:  ${index.slice(2)}`);

let sam = 'IloveCoding';
console.log(sam.substring(-2));

//replace & repeat
let abc = 'Mango';
console.log(abc.replace('an', 'sa'));
console.log(abc.repeat(3));

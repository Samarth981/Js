function Name() {
  console.log('Hello');
} // function defination
Name(); //function call or exicuted

//ex-2
//create a function to roll a dice(ludo game dice)
function dice() {
  let red = Math.floor(Math.random() * 6) + 1;
  console.log(red);
}
dice(); //calling

//Finction with Argument
console.warn('Finction with Argument');
function Argu(name, age) {
  console.log(`${name} age is ${age}`);
}
Argu('samarth', 20);

//creat a function avagrage of three number
function calcAvg(a, b, c) {
  console.log((a + b + c) / 3);
}
calcAvg(3, 7, 8);

//creat a multiplication table // 1 to 20
function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}
printTable(19);

// using retune keywor
// The return statement ends function execution and specifies a value to be returned to the function caller.
function retun(a, b) {
  return a * b;
}
p = retun(5, 5);
q = retun(retun(5, 5), 6); // advansed for using 2 variable and pass 3 value
console.log(p); // print
console.log(q);

//check student is adult or not
console.warn('check adult using return value');
function studentAdult(age) {
  if (age >= 18) {
    return 'adult';
  } else {
    return 'not adult';
  }
}
let age = prompt('enter your age to check you are adult');
let ans = studentAdult(age);
console.log(`your are a ${ans}`);

//sum of array strings
let strs = ['hi', 'i', 'am', 'a', 'boy'];
function sums(strs) {
  let ans = '';
  for (let i = 0; i < strs.length; i++) {
    ans = ans + strs[i];
  }
  return ans;
}
console.log(sums(strs));

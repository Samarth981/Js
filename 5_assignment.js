let arr = [1, 2, 3, 4, 5, 6, 2, 3];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] == 2) {
    arr.splice(i, 1);
  }
}
console.log(arr);

///Q-2
let num = 2356898349839;
let copy = num;
let count = 0;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

//Q3
let n = 7;
let fac = 1;
for (let i = 1; i <= n; i++) {
  fac = fac * i;
}
console.log(fac);

//Q-4
let array = [5, 4, 2, 8, 6];
let big = 0;
for (let i = 0; i <= array.length; i++) {
  if (array[i] > big) {
    big = array[i];
  }
}
console.log(big);

//sum of digit
console.warn('practice');
let number = 5634466;
let sum = 0;
let copies = number;
while (copies > 0) {
  sum = sum + (copies % 10);
  copies = Math.floor(copies / 10); //roundup value
}
console.log(sum);

//math--> randome
let s1 = Math.floor(Math.random() * 100) + 1;

//game for gass number
let math_num = prompt('Please enter the max number');
let random = Math.floor(Math.random() * math_num) + 1;
let user = prompt('Enter your number');
let counts = 0;
while (true) {
  counts++;
  console.log(counts);
  if (user == 'quit') {
    console.log('you are a quit the game');
    break;
  }
  //hint
  if (user == random) {
    console.log('congratulation you are a guess number');
    break;
  } else if (user > random) {
    user = prompt('hint: your guess number is large, so enter small numaber');
  } else {
    user = prompt('hint: your guess number is small, so enter big numaber');
  }
}
console.log(`you max tray is: ${counts}`);

//assignment part-5

let cars = [
  {
    name: 'Maruti',
    model: 'X58',
    colore: 'red',
  },
  {
    name: 'audi',
    model: 'A598',
    colore: 'white',
  },
  {
    name: 'Farary',
    model: 'X2B5',
    colore: 'Yellow',
  },
];

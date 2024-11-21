console.warn('for loop');

console.warn('odd number');
//time== O(n) & space==O(1)
for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//time== O(n/2) & space==O(1) ==> best cord comper first (because time is less)
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}

// console.warn("even number");
//  Q2 => time== O(n/2) & space==O(1)
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
//revers
for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}

//multiplicaation tebal
//time== O(n) & space==O(1)
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

//nested loop
for (let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

//while loop
console.warn('while loop');
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//lest favoret movie game
// const favMovie= ("airenmen");
// let guess = prompt("Gest the favorite move");
// while((guess != favMovie) && (guess!="quit")){
//     guess = prompt("you are rong please guess agine");
// }
// if(guess==favMovie){
//     console.log("congetulation");
// }

//using break keayword
const favMovie = 'airenmen';
let guess = prompt('Gest the favorite move');
while (guess != favMovie) {
  if (guess == 'quit') {
    console.log('you are quit the game');
    break;
  }
  guess = prompt('you are rong please guess agine');
}
if (guess == favMovie) {
  console.log('congetulation');
}

console.warn('loops in loop');
const results = [];
for (let i = 100000; i >= 2; i = i - 2) {
  results.push(i);
}

// Q-2
let fruits = ['mango', 'apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

//nested loop
let student = [
  ['ironmen', 95],
  ['supermen', 85],
  ['rohan', 50],
];
for (let i = 0; i < student.length; i++) {
  for (let j = 0; j < student[i].length; j++) {
    console.log(student[i][j]);
  }
}
// //using for of loop
console.warn('nested for of loop');
for (array of student) {
  for (items of array) {
    console.log(items);
  }
}

// for of loop
//using only string and chare..
let students = ['Samarth', 'parv', 'raj', 'fenil'];
for (Name of students) {
  console.log(Name);
}
//string caracter
for (char of 'Samarthpatel') {
  console.log(char);
}

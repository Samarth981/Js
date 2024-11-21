//Q-1
let inputArry = [1, 10, 3, 15, 9, 2];
let number = 5;
function arrayLargeEli(value, num) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] > num) {
      console.log(value[i]);
    }
  }
}
arrayLargeEli(inputArry, number);

//Q-2
let str = 'abcdabcdefgggh';
let ans = '';
function sa(str) {
  for (let i = 0; i < str.length; i++) {
    if (ans.indexOf(str[i]) == -1) {
      //if element not in ans then exicuted this statement
      ans = ans + str[i];
    }
  }
  return ans;
}
sa(str);
console.log(ans);

//Q-3

let country = ['Australia', 'Germeny', 'UnitedStatesofAmerica', 'UK'];
function largestName(country) {
  let a = 0;
  for (let i = 0; i < country.length; i++) {
    let store = country[a].length; //0 index length store
    let current = country[i].length; // current loop element length
    if (current > store) {
      a = i; // if current length big then element store in a
    }
  }
  return console.log(country[a]);
}
largestName(country);

//Q-4
let Name = 'SamarthPatel';
Name.toLowerCase();

function countVowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == 'a' ||
      str.charAt(i) == 'e' ||
      str.charAt(i) == 'i' ||
      str.charAt(i) == 'o' ||
      str.charAt(i) == 'u'
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowel(Name));

//Q-5

let start = 100;
let end = 200;
function random(start, end) {
  let diffrece = end - start;
  return Math.floor(Math.random() * diffrece) + start;
}

//this- keyword
//this is help to use object key in objects any part
const detail = {
  name: 'samarth',
  age: 19,
  eng: 70,
  math: 75,
  phy: 80,
  average() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
    console.log(this); //detail obeject
  },
};
console.log(detail.average());

// this is help to print widow object (higher lavel objects file)
console.log(this); //print window object

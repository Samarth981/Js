//function expression

let Name = function () {
  console.log('Hello');
};
//change function value
Name = function () {
  console.log('Samarth');
};

//higher order function
let g = function () {
  console.log('hello');
};
function ad(fun, count) {
  for (let i = 0; i < count; i++) {
    g();
  }
}
ad(g, 10);

//return a function
function oddEven(request) {
  if (request == 'even') {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  }
}
let request = 'even'; // passing value
let storage = oddEven(request); // store a function for given request
console.log(storage);

//Methods -> object into function
//ex-1
const calculatore = {
  //this is object
  add: function (a, b) {
    //this is function
    return a + b;
  },
  sub: function (a, b) {
    return a + b;
  },
  mul: function (a, b) {
    return a + b;
  },
};
//same exmple for ex-1 but write a sorthand
const calculatores = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a + b;
  },
  mul(a, b) {
    return a + b;
  },
};

//extra exmple
let user = parseInt(prompt('enter the number you can check odd or even:')); //user input value

let greet = function () {
  console.log('thanks for visiting'); // Pass user input to additionNum function
};

function additionNum(user) {
  if (user % 2 == 0) {
    console.log('the number is even');
    greet();
  } else {
    console.log('the number is odd');
    greet();
  }
}

additionNum(user); // Initial call to additionNum function

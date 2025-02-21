function Person(name, age) {
  //constructor
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log('this is a talk function create in prototype'); //function use in prototype
};

//use new keyword , creat new object & pointing a prototype function
let p1 = new Person('samarth', 20);
let p2 = new Person('soham', 21);
console.log(p1, p2);

console.log(p1.talk == p2.talk); // true because prototype is same

//secound metohod to write
//not need to create prototype autometic create
//using class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log('Hii this is secound method');
  }
}
let p3 = new Person2('samarth', 20);
let p4 = new Person2('fenil', 25);
console.log(p3, p4);

//inheritance -> all parent class properies use childe class

class Person3 {
  constructor(name, age) {
    console.log('this is a parent contructer');
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log('This is use for inheritance learn');
  }
}

//creat student class
class Student extends Person3 {
  constructor(name, age, marks) {
    console.log('this is a childe contructer');
    super(name, age); //parent class constructor is being called
    this.marks = marks;
  }
}
class Teacher extends Person3 {
  constructor(name, age, subject) {
    console.log('this is a childe teacher contructer');
    super(name, age); //parent class constructor is being called
    this.subject = subject;
  }
}
let s1 = new Student('samarth', 30, 90);
let t1 = new Teacher('raj', 30, 'english');
console.log(s1, t1);

//exmple
class Mammal {
  //base class
  constructor(name) {
    this.name = name;
    this.type = 'warm-blooded';
  }
  eat() {
    console.log('I am eating');
  }
}

class Dog extends Mammal {
  //child
  constructor(name) {
    super(name);
  }
  bark() {
    console.log('worff..');
  }
}
class Cat extends Mammal {
  //child
  constructor(name) {
    super(name);
  }
  meow() {
    console.log('meow..');
  }
}

let dog1 = new Dog('pape');
console.log(dog1);
console.log(dog1.eat);
console.log(dog1.bark);

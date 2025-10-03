//method 1
//constructor, start with capital
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log("this is a talk function create in prototype"); //function use in prototype
};

let p3 = new Person("samarth", 20);
let p4 = new Person("Soham", 21);
console.log(p3, p4);
console.log(p3.talk == p4.talk); // true because prototype is same

//same but using class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii this is factory function, ${this.name}`);
  }
}
let p1 = new Person2("samarth", 20);
let p2 = new Person2("Fenil", 25);
console.log(p1, p2);

//inheritance -> all parent class properties use childe class
class Person3 {
  constructor(name, age) {
    console.log("this is a parent contracted");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log("This is use for inheritance learn");
  }
}

//create student class
class Student extends Person3 {
  constructor(name, age, marks) {
    console.log("this is a childe contractor");
    super(name, age); //parent class constructor is being called
    this.marks = marks;
  }
}
class Teacher extends Person3 {
  constructor(name, age, subject) {
    console.log("this is a childe teacher contractor");
    super(name, age); //parent class constructor is being called
    this.subject = subject;
  }
}
let s1 = new Student("samarth", 30, 90);
let t1 = new Teacher("raj", 30, "english");
console.log(s1, t1);

//example
class Mammal {
  //base class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  //child
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("Wolff..");
  }
}
class Cat extends Mammal {
  //child
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("meow..");
  }
}

let dog1 = new Dog("pape");
console.log(dog1);
console.log(dog1.eat);
console.log(dog1.bark);

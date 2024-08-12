// try & catch
console.log("hello-1");
console.log("hello-2");
console.log("hello-3");
console.log("hello-4");

// try {
//     console.log(a); //through error
// } catch{
//     console.log("a variable is not defind"); //catch and work somthing
// }

// catch use as a function
try {
    console.log(a); //through error
} catch(error){
    console.log("a variable is not defind"); //catch and work somthing
    console.log(error); //print error
}
console.log("hello-5");
console.log("hello-6");


//Miscellaneous topics

//topic-1
//Arrow function
//help to sort a function syntext & redused a line of cord
const sum = (a,b) => {
    console.log(a+b); 
}
// const pow = (a,b) => {
//     return Math.pow(a,b);
// }

//return function in arrow 
//comper uper exmple
const pow = (a,b) => ( // change bracker
    a*b  //implicit return
);
let ans = pow(2,3);
console.log(ans);


// setTimeout function

//this is inbuild function
//time pass in miliy-secound.
//use for set a time for exicution

console.log("Hii! are you there");
let id = setTimeout(()=>{
    console.log("my website");
},4000);
console.log("welcome to the program");
console.log(id);


//setInterval

//without ID
// console.log("Hii! exmple-2");
// setInterval(()=>{
//     console.log("my website-2");
// },2000);
// console.log("welcome to");

// Use ID

console.log("Hii! exmple-2");
let id1 = setInterval(()=>{
    console.log("my website-2");
},2000);
console.log("welcome to");
console.log(id1); //print id

console.log("Hii! exmple-2");
let id2 = setInterval(()=>{
    console.log("my website-3");
},4000);
console.log("welcome to");
console.log(id2) // print id2

//give a timeout for id1 & id2 exicution
let id3 = setTimeout( ()=>{
    clearInterval(id1);
    clearInterval(id2);
}, 10000);  


//this with arrrow function

//normal function
const student = {
    name : "samarth",
    marks: 95,
    prop : this, //calling object is globle so print window object
    getName : function(){
        console.log(this); //calling object is student so print all student object
        return this.name;
    },
    //arrow function
    getmarks : () => {
        console.log(this); //calling object parents so print window object
        //in this onject is student and student object means perents of student is window object
        return this.marks;
    },
}
console.log(student);
console.log(student.prop);
console.log(student.getName());
console.log(student.getmarks()); //undefin because return to marks thay che pan this window object 
// che and them marks nathi



// prectice quetion 

//write a arrow function to return a square of number n
const square = (n) => (n*n);
let p = square(8);
console.log(p);


//write a function that print "Hello word" 5 time at intervals of 2s each
let print = setInterval(() => {
    console.log("Hello word");
}, 2000);
// lemite Print
setTimeout(()=>{
    clearInterval(print);
    console.log("stop exicution of print id");
}, 10000);


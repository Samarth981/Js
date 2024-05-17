//Array
// this is a mutable
console.warn("Array");
let array = ['Samarth', 'Soham', 'fenil'];
console.log(array);
//push in last
array.push('aryan');
console.log(array);
//pop is last
array.pop();
console.log(array);

//Unshift() & add in first 
array.unshift('Add first');
console.log(array);
console.log(array.length);
//shift
console.log(array.shift()); // remove first element 

// array.shift().shift(); // not work, because the first shift() would return the element removed from the array, not the array itself. 
console.log(array);
// methods
console.log(array.indexOf("Samarth"));
console.log(array.indexOf("aryan")); //not exists 
console.log(array.includes("Samarth")); //true
console.log(array.includes("green"));

//concatenation & reverse
let p = ["red", "yellow", "blue"];
let s =["green"];
//concat
console.log(p.concat(s)); // not change old value & give new array
console.log(p.reverse());
console.log(p); //output is rever because revers() is change old value 

//slice & splice
let c =["Samarth", "Fenil", "Rahul", "Uthsv"];
//slice not change old value in array
console.log(c.slice(0,2)); //give new array
console.log(c.at(3)); //give value
// splice is mulipal work & and change old string
console.log(c.splice(0,1,"black", "green")); // replace in 0 index
console.log(c);
console.log(c.splice(1,0,"pink")); //after one add pink
console.log(c);

//sorting conver deta in string then give ans thats why not work proper in numbers lets chack in y part
let x =["Samarth", "Fenil", "rahul", "Uthsv"]; 
console.log(x.sort()); // small > capital & check for first latter
let y =[2, 5, 69, 41, 10];
console.log(y.sort()); //sting conver and chack for first digit.


//reference  work for address in memory
//"green" == "green"
// if "green" == "purpal" --> ans true because not use reference
console.log("('green'== 'green' or 'green'== 'green')" + " " + ("green" == "green"));

// [1]==[1] or [1]===[1] it is not true why  because creat to varibale and array work reference
// [1]--> address different for [1] this array
console.log("[1]==[1] or [1]===[1]" + " " + ([1] == [1]));
 
//ex-2 ...........
let abc = ['a','b','c'];
let xyz = abc; // abc address is assing into xyz thats means both address same so if
console.log(xyz==abc); // true because same address
xyz.push('p');
console.log(abc) //  value change because xyz add p so aoutometic change abc because same addresss.

//if I tray to not change then give values for array xyz then autometic address chenge
xyz = ['a','b','c']; // value is same but address is deffrent so both are not same
console.log(xyz==abc); // false because this change address


//nested array
let num=[[1,2],[3,4],[5,6],[7,8]];
console.log(num);
//prectice
let game=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(game);
game[0][1]='o';
console.log(game);
//q-2
let ar = [7,9,0,-2];
let n = 3;
console.log(ar.slice(0,n));
console.log(ar.slice(ar.length-n));

//assingment q-3
let str = prompt("Please enter the text"); // user give input
if(str.length == 0){
    console.log("this string is empty");
} else{
    console.log("this string is not empty");
}

let st = str// user give input
let cher_idx = 3;
if(st[cher_idx] == st[cher_idx].toUpperCase()){
    console.log("Upper string");
} else{
    console.log("not Upper string");
}

//same exmple in array
let t = ['smarth', 'kjhfkjakfe', 'NFKJBSJFBKEB', 'FDHFKDSBFJB']
let cher = 3;
if(t[cher] == t[cher].toUpperCase()){
    console.log("Upper array");
} else{
    console.log("not Upper array");
}

// let item=prompt('enter array'); 
// this is not work because prompt is  returns a string, but in ara are contains numbers so, conver a string into int
let item = parseInt(prompt('Enter a array eliment'));
let ara=[2,3,5,7,8];
if(ara.indexOf(item) != true){
    console.log("value is exist in array");
} else {
    console.log("value is not exist in array");
}
//forEach function
//work for same like for of for loop

let array = [1,2,4,5,6,3,19];
function printEli(array){
    console.log(array);
}
array.forEach(printEli); 

//pass direct function as a input
let array2 = [4,6,80,12,35,68,90];
array2.forEach((element)=>{
    console.log(element);
})

//using for of for loop
let array3 = [40,60,70,90,20,10,90];
for(element of array3){
    console.log(element);
}

//array-object into function
let arrays = [
    {
        name:"samarth",
        marks:90,
    },
    {
        name:"soham",
        marks:80,
    },
    {
        name:"rahul",
        marks:70,
    },
    {
        name:"mohan",
        marks:20,
    },
    {
        name:"pinkes",
        marks:10,
    },
    {
        name:"mina",
        marks:15,
    },
    {
        name:"fenil",
        marks:78,
    }
];
arrays.forEach((student)=>{
    console.log(student.marks);
});

//map
//map is use for oparation in all eliments in array and creat a new array
let gpa = arrays.map((el)=> el.marks/10);
console.log(gpa);

//filter 
//filter use to filler array and creat a new array
let pass = arrays.filter((value)=> value.marks>=20);
console.log(pass);

//Evry
//return single value(true or false)
//every work as like && operator
//check condition and all element conditon is sutable then return a true 

let evryArray = [1,3,4,6,7,8,8];
let evryArray_2 = [2,4,6,9,12,0];

let a = evryArray.every((value)=> value%2 == 0); //false not all even
let b = evryArray_2.every((el)=> el%2==0); //true
console.log(a,b);

//some 
//return single value(true or false)
//every work as like ||(or) operator
//if minimum one condition is sutable then print true 
let c = evryArray.some((value)=> value%2 == 0); //true
let d = evryArray_2.some((el)=> el%2!=0); //false
console.log(c,d);

//reduced
//array element reduced and return a single value
let sum = evryArray.reduce((a,b)=> a+b);
console.log(sum); //some of array

//check mex value in array
//use normal loop
let max = 0;
for(let i=0;i<evryArray.length;i++){
    if(evryArray[i]>max){
        max = evryArray[i];
    }
}
console.log(max);

//using reduce method
let max2  = evryArray_2.reduce((max,a)=> {
    if(max > a){
        return max;
    }else{
        return a;
    }
});
console.log(max2);



//prectice quetion
//check all value is multiplya by 10 or not

//in this quetion check all value then use every method
multi = [10,20,30,40];
let ans = multi.every((el) => el%10==0);
console.log(ans);
//if quetion is multiply 10 in all array value then use mep method 

//min number in arrau find and creat a function for use all array.

function getmin(array){
    let min = array.reduce((min,a)=> {
        if(min < a){
            return min;
        }else{
            return a;
        }
    });
    return min;
}
let ans3 = getmin(multi);
console.log(ans3);

let newArray = [2,3,56,8,5,2,7,90,324,9];
console.log(getmin(newArray));

//Default paramiter

function val(a,b=2){
    return a+b;
}
console.log(val(2,5)); //7
console.log(val(2)); //4

function val2(a=2,b){
    return a+b; //b unndefind
}
console.log(val2(2)); //NAN

function val2(a,b){
    return a+b;
}
console.log(val2(2)); //NAN


//spred
//spred the value internally
let cher = [..."hellow"];
console.log(cher);

//spred + array litral 
let array1 = [1,2,3,4];
let newarray = [...array1];
console.log(`not change array: ${array1}`);
console.log(`not change newarray: ${newarray}`);
newarray.push(5);
console.log(`not change array: ${array1}`);
console.log(`change newarray: ${newarray}`);

//spred + object litral
const obj = {
    Email : 'xyz@gmail.com',
    pas : 'xyz',
}
const objCopy = {...obj, id:123};
console.log(objCopy);

//concate
let ar1 = [1,2,3,4];
let ar2 = [5,6,7,8];
let ar = [...ar1, ...ar2];
console.log(ar);

//array to object
let ar3 =[5,6,7,8,9];
const objects = {...ar3};
console.log(objects);

//string to object
let str = "samarth";
const objec = {
    ...str
}
console.log(objec);


//rest is a rever for spread
//multipale value store in one array
function fu(...args){
    for(let i=0;i<args.length;i++){
        console.log("argument is :" + args[i]);
    }
}

//destuctuing
//this is help to store array part in variables
let arr1 =[1,2,1,3,4,5];
let [first, secound] = arr1;
console.log(first , secound);

//in object
const obje = {
    name : "samarth",
    age : 12,
    username : "samarth133",
    password : "khfffgog",
};
let {username, password, ...others_value} = obje; //...others_value =>rest consepts(combine)
console.log(username, password, others_value);




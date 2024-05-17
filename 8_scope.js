// let sum = 54; //globle scope
// function sums(a,b){
//     let sum = a+b; //function scope
//     return sum;
// }
// console.log(sums(1,2)); // 3
// console.log(sum); //54 


let sum = 54; //globle scope
function sums(a,b){
    // let sum = a+b; //function scope
    console.log(sum); //3 
    // if function scope is comment then access globle scope
}
sums(1,2);
console.log(sum); //54 


//Lexical scope
function outerFonc(){
    let a =9;
    let b=10;
    function ineerFunc(){
        console.log(a) //it is possible to access outer function 
        //like outerfunction work as like globale
    }
    ineerFunc();

    function ineerFunc2(){
        console.log(b);
    }
    ineerFunc2();
}


//EXP-2
outerFonc();
function outerfonc(){
    let a =9;
    let b=10;
    function ineerfunc(){
        let a=15 //function scope
        console.log(a);
    }
    ineerfunc();
}
outerfonc();

//hoisting
//not IMP
function outer(){
    function ineer(){
        console.log(x);
        console.log(y);
    }
    //decler variable after function
    let x=5;
    let y=8
    ineer();
    //it is work because delcaretion fist after function call
}

//exp-2

// function outer2(){
//     function ineer2(){
//         console.log(x);
//         console.log(y);
//     }
//     //decler variable after function
//     ineer2();
//     let x=5;
//     let y=8;
//     //it is not work because function call fist after  delcaretion
//     //give error
// }


//EXP-3
let s = 10; //Globle scop
function first(){
    let s= 15; //function scop
    console.log(s);
    function secound(){
        console.log(s); //lexical scop
    }
}
console.log(s);
first();
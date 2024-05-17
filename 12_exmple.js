// let array = [3,5,6,7,8,10,22];
// const averageArray = (array) => {
//     let ans = 0;
//     for(let i=0; i<array.length;i++){
//         ans = ans[i];
//         avergae = ans / array.length;
//     }
//     return avergae;
// }
// console.log(averageArray(array));

//quetion-1
let array = [3,5,6,7,8,10,22];
const averageArray = (array) => {
    let ans = 0;
    for(let i=0;i<array.length;i++){
        ans = ans + array[i];
    }
    return ans / array.length;
}
console.log(averageArray(array));

// quetion-2
const Event = (n) => {
        if(n%2==0){
            return "even"
        }else {
            return "odd"
        }
}
let anser = Event(15);
console.log(anser);

//same even and odd but pass a true or falls
let n=12;
const Even = (n) => (n%2==0);
console.log(Event(n));

//quetion-3 dibuging
const object = {
    message : 'samarth',
    logName() { 
            console.log(this.message);
        }
};
setTimeout(object.logName,1000);
//print undefind because acess a only function, and this function not a message fun.

//quetion-4
let l = 4;
function callBack(){
    console.log(this.l); //this is ckeck calling statement,so l is not in function, so output is undefind 
    //if use arrow function then output is 4 because check perent and parent is glowbal object , in global object l is defind as a variable 
}
const obj = {
    l : 5,
    method(callBack){
        callBack();
    },
};
obj.method(callBack);



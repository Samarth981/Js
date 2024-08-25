let btn = document.querySelector('button');
btn.addEventListener('click',function(event){
    console.log(event);
    console.log('button click');
});

btn.addEventListener('dblclick',function(event){
    console.log(event); //all events nodelist
    console.log('button is doublclick');
});

//keybord event

//keydown
let count = 0;
let input = document.querySelector('input');
input.addEventListener('keydown' , (event) => {
    console.log(event);
    console.log("key = "+event.key);
    count++;
    console.log("code = "+event.code); //Arrowleft, Arrowright, Arrowup, Arrowdown
    if(event.code== "ArrowUp"){
        console.log("game care move in forward");
    }else if(event.code== "ArrowDown"){
        console.log("game care move in backword");
    }else if(event.code== "ArrowLeft"){
        console.log("game care move in left");
    }else if(event.code== "ArrowRight"){
        console.log("game care move in right");
    }
});
input.addEventListener('keyup' , (event) => {
    console.log(event);
    console.log("key = "+event.key);
    console.log("code = "+event.code);
    
});
let c = document.getElementById('count');
c.addEventListener('click' , ()=>{
    console.log(count);
})
let r = document.getElementById('restart');
r.addEventListener('click' , ()=>{
    count = 0;
})

//form Event

//use normal submit event,
// let form = document.querySelector('form');
// form.addEventListener('submit', alerts);
// function alerts(event) { 
//     let confirmation = confirm(" you wDoant to submit the form?");
//     alert("form is submit");
// }

// use preventDefault()
//help to defalu peramiter is remove. like emple -> action after submite button
let form2 = document.getElementById('registrationForm');
form2.addEventListener("submit", alerts);
function alerts(event) {
    event.preventDefault();
    alert("form is submit"); 
}
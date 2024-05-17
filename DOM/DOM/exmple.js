// // 1. a <p> with red text says "Hey I am red"
// let p = document.createElement('p'); //creat pera
// p.innerText = "Hyy I am a red"; //add text
// let body = document.querySelector('body') //access body
// body.append(p) //append in body
// p.classList.add('pera'); //ad colore

// // 2. same add <h3> text->"I am blue h3"
// let h3 = document.createElement('h3'); //creat pera
// h3.innerText = "Hyy I am a red"; //add text
// // let body = document.querySelector('body') //access body
// body.append(h3) //append in body
// h3.classList.add('blue'); //ad colore

// // 3. a <div> with a black border and pink bg colore with the add <h1> and <p>
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p2 = document.createElement('p');
// h1.innerText = "Hyy samarth";
// p2.innerText = "you are good?";
// div.classList.add('box'); 
// div.append(h1);
// div.append(p2);
// body.append(div);



//uper part use append show show a after script teg in html

//but use prepend then appnd div in start body
//and all cord set revere last is first
// 1. a <p> with red text says "Hey I am red"
let p = document.createElement('p'); //creat pera
p.innerText = "Hyy I am a red"; //add text
let body = document.querySelector('body') //access body
body.prepend(p) //prepend in body
p.classList.add('pera'); //ad colore

// 2. same add <h3> text->"I am blue h3"
let h3 = document.createElement('h3'); //creat pera
h3.innerText = "Hyy I am a red"; //add text
// let body = document.querySelector('body') //access body
body.prepend(h3) //prepend in body
h3.classList.add('blue'); //ad colore

// 3. a <div> with a black border and pink bg colore with the add <h1> and <p>
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');
h1.innerText = "Hyy samarth";
p2.innerText = "you are good?";
div.classList.add('box'); 
div.prepend(h1);
div.prepend(p2);
body.prepend(div);


//assingnment

// 1.creat a new input button and button element on the page using JavaScript only.Set the text of button to “Click me”;
let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerText = "Click me";
body.append(input);
body.append(btn);

//2. Change place holder value of input to “username”
// Change the id of button to “btn”
btn.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');


//3. Access the btn using the querySelector and button id.Change the button backgroundcolor to blue and text color to white.
let btton = document.querySelector("#btn");
btton.classList.add("btnstyle");

//4. Create an h1 element on the page and set its text to “DOMPractice” under lined. Change its color to purple.
let heading = document.createElement('h1');
heading.innerHTML = "<u>DOM Practice</u>";
body.append(heading);

//5. Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.

let text = document.createElement('p');
text.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(text);

//exmple.js same but in this exmple use prepend


// 1. a <p> with red text says "Hey I am red"
let p = document.createElement('p'); //creat pera
p.innerText = "Hyy I am a red"; //add text
let body = document.querySelector('body') //access body
body.prepend(p) //prepend in body
p.classList.add('red'); //ad colore

// 2. same add <h3> text->"I am blue h3"
let h3 = document.createElement('h3'); //creat pera
h3.innerText = "Hyy I am a blue"; //add text
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

//on-Click -->click the button
//onmouseenter -->hover the button
let btn = document.querySelectorAll('button');
console.dir(btn);

for(exicute of btn) {
    exicute.onclick = print;
    exicute.onmouseenter = function(){
        console.log("don't come in this button");
    }
}       
function print() {
    alert(`thanks for clicking button`);
}

//addEventListener
let btn2 = document.querySelector('#abc');
btn2.style.backgroundColor = 'blue';
btn2.addEventListener("click", () => {
    console.log("thanks for submite ans");
});

btn2.addEventListener("dblclick", () => {
    console.log("thanks for duble cleck in button");
});

let btn3 = document.querySelector('#xyz');
btn3.style.backgroundColor = 'yellow';
btn3.addEventListener("contextmenu", () => {
    console.log("right click for mause in this button");
});


//this in EventLisener
//ex-1
//button click then chang colore and background but then click aganie then colore remove
let btns = document.querySelectorAll('button');
//this check btns objects
function changeColor(){
    // Check if the background color is black
    if (this.style.backgroundColor === 'black') {
        // If black, revert to the original color
        this.style.backgroundColor = ''; // This removes the inline style
        this.style.color = ''; // Reset text color
    } else {
        // If not black, change to black background and white text
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
    }
}
console.dir(btns);
btns.forEach((btn) => btn.addEventListener('click', changeColor));  //use function for all eliment asscess because creat a nod list


//ex-2
// Get all toggle buttons
let toggleButtons = document.querySelectorAll('.toggle-button');

// Iterate over each toggle button
toggleButtons.forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener('click', togg);
});
function togg() {
    // Find the next sibling element of the button, which is the corresponding section
    let section = this.nextElementSibling;

    // Toggle the visibility of the section
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}
let btn = document.createElement("button");
btn.addEventListener("click", function(){
  btn.style.background = "green";


  //after clike remove colore
  setTimeout(function(){
    btn.style.background = null;
  },100);

});
btn.innerText = "submit";
let body = document.querySelector("body");
body.appendChild(btn);

let input = document.querySelector("input")
let heading = document.querySelector(".heading")
input.addEventListener("keydown",function(){
    heading.innerText = input.value;
});

// const userNameInput = document.querySelector('input');
// const heading = document.querySelector('.heading');

// userNameInput.addEventListener('input', function() {
//   const userName = this.value.replace(/[^a-zA-Z\s]/g, '');
//   heading.innerText = `Enter your name: ${userName}`;
// });

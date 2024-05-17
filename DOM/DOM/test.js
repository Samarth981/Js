// let btn = document.createElement("button");
// let body = document.querySelector("body");
// btn.innerText = "sample";
// btn.addEventListener("click", function(){
//     btn.style.background = "green";
// })
// body.appendChild(btn);
// btn.addEventListener("")
// let input = document.querySelector("input")
// let heading = document.querySelector(".heading")
// input.addEventListener("keydown",function(){
//     heading.innerText = input.value;
// })
const userNameInput = document.querySelector('input');
const heading = document.querySelector('.heading');

userNameInput.addEventListener('input', function() {
  const userName = this.value.replace(/[^a-zA-Z\s]/g, '');
  heading.innerText = `Enter your name: ${userName}`;
});

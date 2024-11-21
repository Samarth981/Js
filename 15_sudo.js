let gameseq = [];
let userseq = [];
let level = 0;
let start = false;

// game start
document.addEventListener('keypress', function () {
  if (start == false) {
    start = true;
    levelup();
  }
});
let h2 = document.querySelector('h2');
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  random();
}
let classBtns = ['yellow', 'red', 'purple', 'green'];
function random() {
  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = classBtns[randomIdx];
  gameseq.push(randomColor);
  let classAces = document.querySelector(`.${randomColor}`);
  randomFlesh(classAces);
}
function randomFlesh(btn) {
  btn.classList.add('flesh');
  setTimeout(function () {
    btn.classList.remove('flesh');
  }, 250);
}
let btnall = document.querySelectorAll('.btn');

function userFlesh(btn) {
  btn.classList.add('userFlesh');
  setTimeout(function () {
    btn.classList.remove('userFlesh');
  }, 250);
}
for (btn of btnall) {
  btn.addEventListener('click', function () {
    userFlesh(this);
    userseq.push(this.getAttribute('id'));
    // comper last update colore is same or not
    if (userseq[userseq.length - 1] === gameseq[userseq.length - 1]) {
      if (userseq.length == gameseq.length) {
        setTimeout(levelup, 1000);
      }
    } else {
      h2.innerHTML = `game over! your score was <b>${level}</b> </br> press any key to strat`;
      document.querySelector('body').style.backgroundColor = 'red';
      setTimeout(function () {
        document.querySelector('body').style.backgroundColor = 'white';
      }, 150);
      reset();
    }
  });
}
function reset() {
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
  h2.innerText = 'Press any key to start the game';
}

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  let h3 = document.querySelector('h3');
  let box = document.querySelector('div');
  h3.innerText = getrendom();
  box.style.backgroundColor = getrendom();
});

function getrendom() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red} , ${green}, ${blue})`;
  return color;
}

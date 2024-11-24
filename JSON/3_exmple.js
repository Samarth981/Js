let btn = document.querySelector('button');
let ul = document.getElementById('list');
let i = document.getElementById('county');
let url = 'http://universities.hipolabs.com/search?name=';
async function getCollage() {
  try {
    let res = await axios.get(url + i.value);
    return res.data;
  } catch (err) {
    return err;
  }
}
btn.addEventListener('click', async () => {
  list.innerText = ''; //after secound time search
  let collageArr = await getCollage();
  console.log(collageArr);
  for (collage of collageArr) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.innerText = collage.name;
    a.innerText = collage.web_pages;
    a.setAttribute('href', collage.web_pages);
    ul.appendChild(li);
    ul.appendChild(a);
  }
});

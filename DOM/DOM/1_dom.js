console.dir(document); //main object

//selecting element
// let imag = document.getElementById(mainImg) // this treat as a variable so use ""
let imag = document.getElementById("mainImg");
let imag2 = document.querySelector("#mainImg");
console.dir(imag);
//change imag sorce
imag.src = "./creation_3.jpeg"; //change image sorce, so change image
console.dir(document.getElementById("description"));

//access class
let c = document.getElementsByClassName("oldImg");
console.log(c);
console.log(document.getElementsByClassName("oldImg")[1]); //access index 1


// print all class=oldimage print
let smallimg = document.getElementsByClassName("oldImg");
// for(image of smallimg){
//     console.dir(image.src = "./spiderman_img.png"); //access image sorce and change 
// }

for(let i=0; i<smallimg.length; i++){
    console.dir(smallimg[i].src = "./spiderman_img.png");
}
//set for all acording old
let change = document.getElementsByClassName("oldImg"); //access all oldImg
console.dir(change);
for(let i = 0; i < change.length; i++) {
    if(i == 0) {
        change[i].src = "./creation_1.png"; //change first
    } else {
        change[i].src = "./creation_" + (i+1) + ".jpeg"; //secound and third  image change
    }  
} 


//querty selector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));

//nesting
console.dir(document.querySelector(".box ul li a")); //give first li a  
console.dir(document.querySelectorAll(".box ul li a")) //all li a //give ans nodelist because tree stucture in js


//Manupulating attribute
//gerAttribute(attr)
document.getElementById("mainImg").src = "./spiderman_img.png"; //access mainimg id and change src
let image = document.querySelector('img');
image.getAttribute('id'); // access id
image.setAttribute('id','spidermenimg'); //access id and change id 

//style manupulation
//obj.style

//style properti in java not use frequentlly
//because this show as a inline style
//  style use in css
let styles = document.querySelector('h1');
styles.style.color = "red";
styles.style.backgroundColor = "yellow";

let anker = document.querySelectorAll('.box a');
for(let i=0; i<anker.length;i++){
    anker[i].style.color = "purple";
}


//using classList

//classList.add() to add new classes
//classList.add() to remove a classes
//classList.contains() to check class is exist if not exist then give false
//classList.toggel() if classes exist then remove and not exist then add
//setAttribut('class', 'bgColore') //this attribut to set a only on e class if any other class exist then remove 
                                    //so not use frequently
let box = document.querySelector('.box');
box.classList.add("bgColor"); //add new class 
box.classList.add("bg");
console.log(box.classList);
box.classList.remove("bg") //bg class remove
console.log(box.classList);
box.classList.contains("bg"); //if not exist then falses
box.classList.toggle('bg');
console.log(box.classList);


//navigation
//ParentElement
//children
//childElementCount
//nextElementSibling
//previousElementSibling
let first = document.querySelector(".box");
console.log(first.parentElement);
console.log(first.children);
console.log(first.childElementCount);
console.log(first.childNodes);
console.log(first.children[0].nextElementSibling);
console.log(first.children[1].previousElementSibling);

//exmple
imag.previousElementSibling.style.color = "purple";



//Adding Element in Document
//appenchild -> nesting

let newP = document.createElement('p');
newP.innerText = "Hii let's creat a new Eliment";

let body = document.querySelector('body')
body.appendChild(newP); //stor in body

first.appendChild(newP); 

let btn = document.createElement('button') //button creat
btn.innerText = "Submit";
first.appendChild(btn);

newP.append(" ,this is new text");

//If I tray button come in pera line
newP.append(btn);
newP.append("Please dont submit");
newP.prepend("my name is samarth."); 

let h1 = document.querySelector('h1');

// function changeColor(color, delay, nestcolore){
//     setTimeout( () =>{
//         let h1 = document.querySelector("h1");
//         h1.style.color = color;
//         if(nestcolore) nestcolore();
//     },delay);
// }

// //callhell
// changeColor("red" ,1000, () =>{
//     changeColor("green" ,1000 , () => {
//         changeColor("orange" ,1000 , () => {
//             changeColor("yellow",1000, () => {
//                 changeColor("red",1000);
//             });
//         });
//     });
// });

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve('color is change');
    }, delay);
  });
}

// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color is complited");
//         return changeColor("green", 1000)
//     })
//     .then(()=>{
//         console.log("grenn color is compilted");
//         return changeColor("blue", 1000)
//     })
//     .then(()=>{
//         console.log("blue color is compilted");
//         return changeColor("yellow", 1000)
//     })
//     .then(() => {
//         console.log("yellow color is compilted");
//         return changeColor("orange", 1000)
//     })
//     .then(()=>{
//         console.log("orange color is compilted");
//     });

//infintet time run then use function
// function infinetChangeColor(){
//     changeColor("red", 1000)
//     .then(() => {
//         console.log("red color is complited");
//         return changeColor("green", 1000)
//     })
//     .then(()=>{
//         console.log("grenn color is compilted");
//         return changeColor("blue", 1000)
//     })
//     .then(()=>{
//         console.log("blue color is compilted");
//         return changeColor("yellow", 1000)
//     })
//     .then(() => {
//         console.log("yellow color is compilted");
//         return changeColor("orange", 1000)
//     })
//     .then(()=>{
//         console.log("orange color is compilted");
//         infinetChangeColor();
//     });
// }
// infinetChangeColor(); //function calling

//using awite keyword
// awite keyword only sue for async function

// async function infinetChangeColor(){
//     await changeColor("red", 1000)
//     await changeColor("green", 1000)
//     await changeColor("blue", 1000)
//     await changeColor("yellow", 1000)
//     await changeColor("orange", 1000)

//     // if come error then not print 5 because stuck code so use error hendling
//     infinetChangeColor();
//     let n=5;
//     console.log(n);
// }
// infinetChangeColor();

// if error come then code is stuct so use for error hendling try & Cache
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log('colore is ' + color);
      resolve('color is change');
    }, delay);

    //error come then
    let rendom = Math.floor(Math.random() * 5) + 1;
    if (rendom > 3) {
      reject('promise is reject');
    }
  });
}

async function infinetChangeColor() {
  try {
    await changeColor('red', 1000);
    await changeColor('green', 1000);
    await changeColor('blue', 1000);
    await changeColor('yellow', 1000);
    await changeColor('orange', 1000);
  } catch (err) {
    console.log(err);
  }
  infinetChangeColor();
  let n = 5;
  console.log(n);
}
infinetChangeColor();

//i am study one after one function call -> callhell sicuation -> promise -> then() & cache() ->async -> await -> try & cahe

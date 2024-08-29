// step - 1 -> start game for cleack any keybod in page 
// step - 2 -> after start btn flash & level update
// flach btn stor in one arr
// step - 3 -> user press btn 
// stor in one arr
//comper both
// step - 4 -> reset game if agine start


let gameSeq = [];
let userSeq = [];
let btns = ["green" , "yellow", "purple","red"];

let gameStr = false;
let level = 0;
let h2 = document.querySelector("h2");

//if any key is prees then detect and game start
document.addEventListener("keypress", () => {
    if(gameStr == false){
        console.log("game is start");
        gameStr = true;
        levelUp();
    }

});

//randome

function btnFlash(btn){
    //randome flash
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

//randome generate + level up + update next leval reset arr
function levelUp(){
    userSeq = []; //level up then rset userSeq in nest level

    level++;
    h2.innerText = `Level - ${level}`;

    //randome btns chosse
    let random_idx = Math.floor(Math.random()*3);
    let random_colore = btns[random_idx];
    let random_btn = document.querySelector(`.${random_colore}`);
    gameSeq.push(random_colore);
    btnFlash(random_btn);
};


//user press
function userFlash(btn){
    //randome flash
   btn.classList.add("flash2");
    setTimeout(function(){
        btn.classList.remove("flash2");
    },250);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", function(){
        userFlash(this);
        // let userColor = btn.classList[1]; //this is give only first time come class so use this 
        let userColor = this.classList[1];
        userSeq.push(userColor); //store in arr
        checkAns(userSeq.length-1); //currnt index
    });
}

//check game and user sequence is mainten
//both arr size is level 
function checkAns(index){
   if(userSeq[index] === gameSeq[index]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }else{
    h2.innerHTML = `game over! and your scor is <b class = "bold">${level}</b>. <br> <h3 class = "orange">press any key to start</h3>`;
    //after game rong then red scree
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "black";
    },150);
    reset();
   }
}

//game reset
function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStr = false;
}

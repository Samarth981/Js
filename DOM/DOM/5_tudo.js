let input = document.querySelector("input");
let btn = document.querySelector("button");
let uls = document.querySelector("ul");
btn.innerText = "add"
btn.addEventListener("click", function(){
    // step 1 ->creat new list
    let item = document.createElement("li");
    item.innerText = input.value;

    //step-2 -> acreat btn
    let deleting = document.createElement("button");
    deleting.classList.add("delete"); //give class
    deleting.innerText = "delete";

    //step-3 append btn in list
    item.appendChild(deleting);
    //step-4 -> list append in ul lists
    uls.appendChild(item);
    input.value = "";
});

//if btn click then exgisting list delete but new list not delet

// let delbtns = document.querySelectorAll(".delete");       
// for(delet of delbtns){
//     delet.addEventListener("click", function(){
//         let del = this.parentElement;
//         del.remove();
//     });

//use Event Delegration concept
// if same tiye eliment addEventListener is exist then new same type eliment create then not work
//like exmple btn object addEventListener is alredy creat (line 5) after then append new btn in li and li append in ul so not add direct btn (because addEventListener alredy exist)
//so, use for parent object  and call target eliment(btn) and remove li(this li is parent for btn)
uls.addEventListener("click", function(event) {
    // if (eliment.target.classList.contains("delete")) {
    //     eliment.target.parentElement.remove();
    // }

    //or

    //nodename is give whiche eliment trigger like btn,input,etc
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentEliment;
        listItem.remove();
    }
});
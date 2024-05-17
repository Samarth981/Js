let input = document.querySelector("input");
let btn = document.querySelector("button");
let uls = document.querySelector("ul");
btn.innerText = "add"
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delet = document.createElement("button");
    delet.classList.add("delete")
    delet.innerText = "delete";
    

    item.appendChild(delet);
    uls.appendChild(item);
    input.value = "";
});

// not work for this delete creat elemint only delete for existing element for html
let delbtns = document.querySelectorAll(".delete");       
for(delet of delbtns){
    delet.addEventListener("click", function(){
        let del = this.parentElement;
        del.remove();
    });
}
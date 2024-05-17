let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);    
    alert(`hyy ${user.value} your password is saved`);
});

//internal eliment track to using  form object
//not use query selector for form because internal all form save some area
form.addEventListener("submit" , function(event){
    // event.preventDefault();
    let user = form.elements[0];
    let pass = form.elements[1];
    console.dir(form);
    console.log(user.value);
    console.log(pass.value);    
    alert(`hyy ${user.value} your password is saved`);
});
//chnge event
let input = document.querySelector("#user"); 
input.addEventListener("change",function(){
    console.log("final value =", this.value);
})

//input event
let pass = document.querySelector("#pass"); 
pass.addEventListener("input",function(){
    console.log("final pass =", this.value);
})
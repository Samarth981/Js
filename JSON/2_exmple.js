let btn =  document.querySelector("button");
let p = document.getElementById("result");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(error){
            console.log(error);
            return "no fact found";
    }
} 
let btn2 = document.querySelector(".img");
let image = document.getElementById("ranImg");

btn2.addEventListener("click", async () => {
    let link = await getImg();
    image.setAttribute("src", link);
});

let dogUrl = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try {
        let res = await axios.get(dogUrl);
        return res.data.message;           
    } catch(error) {
        console.log(error);
        return "no img found";
    }
}
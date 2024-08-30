let btn =  document.querySelector("button");
let p = document.getElementById("result");

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
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    p.innerText = fact;
});
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
        return res.data.message;         //data come as a linke  
    } catch(error) {
        console.log(error);
        return "no img found";
    }
}
//hedaer passing 
const url2 = "https://icanhazdadjoke.com/";
async function passHeader(){
    try{
        const hedaer = {hedaer: {Accept : "application/json"}}; //come data as form json 
        let res = await axios.get(url,hedaer);
        console.log(res.data);
    }
    catch(error) {
        console.log(error);
    }
}
passHeader();
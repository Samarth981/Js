//generat request using -> Fatch
//in past request generate for ->XMLHTTPRequest obj -> but this was not work Asynce and promise consepts is not work and using 
// this some essuse face thats way use Fatch

// fetch(url) //fetch return a promices
 
let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((respons) => { 
//         console.log(respons); //come in body redablestrem not access all data 
//         return respons.json() // access using this function use -> come to redable formet 
//         //this was retuen promise // and in the promise response give data
//     })
//     .then((data) => {
//         console.log(data); //respons --> object -> response -> data
//         return data.fact
//     })
//     .then((fact) => {
//         console.log(fact);
//     })
//     .catch((err) => {   
//         console.log("Error :", err );
//     });


// secound exmple, one url two diffrent response
// fetch(url)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data1) => {
//         console.log("data1 = ",data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data2) => {
//         console.log("data2 = ",data2.fact);
//     })
//     .catch((err) => {   
//         console.log("Error :", err );
//     });
//     console.log('samarth'); // do not exicute first uper program because asynce consepte

// //3 exmple
// async function getfacts(){
//     let res = fetch(url);
//     console.log(res); //ans is undefind because asynce consept do not white for the uper url check direct print
//     //  res and not come data so print undefind thats why use --> awite -> 
//     // because awite use first come data and then next call.
// }
// getfacts();

//write ans is 
// async function getfacts(){
//     try{
//         let res = await fetch(url); //after response go next 
//         let data =  await res.json(); //res is also async function that's why use awite in there.
//         console.log(res);
//         console.log(data);

//         let res2 = await fetch(url);
//         let data2 =  await res2.json(); //res is also async function that's why use awite in there.
//         console.log(res2);
//         console.log(data2);
//     }catch(error){
//         console.log(error);
//     }
// }

//using axios.get
//because if use for fetch then data come for jsone formate not a redable formate so that's why , first push and use 
//but in this libarary direct use for url data
async function getfacts(){
    try{
        let res = await axios.get(url);
        // let data =  await res.json(); not use for this because direct use data 
        console.log(res);
        console.log(res.data.fact);

        let res2 = await axios.get(url);
        // let data2 =  await res2.json(); //res is also async function that's why use awite in there.
        console.log(res2);
        console.log(res2.data.fact);
    }catch(error){
        console.log(error);
    }
} 



// fetch(url) //fetch return a promises

let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     console.log(response); //come in body readable-stream not access all data
//     return response.json(); // response.json() send agine data promise so agine .then call for data access into promise and come form readable format
//   })
//   .then((data) => {
//     console.log(data); //response --> object -> response -> data
//     return data.fact;
//   })
//   .then((fact) => {
//     console.log(fact);
// //   })
// //   .catch((err) => {
// //     console.log("Error :", err);
// //   });

// // 2 example -> use async
// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     console.log(res); //ans is undefined because async concept do not white for the upper url check direct print
//     //  res and not come data so print undefined thats why use --> awite ->
//     // because awite use first come data and then next call.
//     let data = await res.json();
//     console.log(data.fact);
//   } catch (error) {
//     console.log('error : ', error);
//   }
//   console.log('code execute not stack');
// }
// getFacts();

// write ans is
// async function getFacts() {
//   try {
//     let res = await fetch(url); //after response go next
//     let data = await res.json(); //res is also async function that's why use awite in there.
//     console.log(res);
//     console.log(data);

//     let res2 = await fetch(url);
//     let data2 = await res2.json(); //res is also async function that's why use awite in there.
//     console.log(res2);
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getFacts();

// using axios.get
// because if use for fetch then data come for jsone formate not a readable formate so that's why , first push and use
// but in this library direct use for url data

async function getFacts() {
  try {
    let res = await axios.get(url);
    // let data =  await res.json(); not use for this because direct use data
    console.log(res);
    console.log(res.data.fact);

    let res2 = await axios.get(url);
    console.log(res2.data.fact);
  } catch (error) {
    console.log(error);
  }
}
getFacts();

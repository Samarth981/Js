// I tray to if first is true then secound and secound is true then thired

// function saveToDB(data, success, failure){
//     internatSpead = Math.floor(Math.random()*10)+1;
//     if(internatSpead > 4){
//         success()
//     }else{
//         failure()
//     }
// }

//call hill
// saveToDB(
//     "apna collage",
//     ()=>{
//         console.log("success : your data was saved");
//         saveToDB(
//         "hello word",
//         () => {
//             console.log("success2 : your data was saved");
//             saveToDB(
//                 "hello word you can success for 3",
//                 () => {
//                     console.log("success3 : your data was saved");
//                     saveToDB(
//                         "hello word you can success for 4",
//                         () => {
//                             console.log("success4 : your data was saved");
//                         },
//                         () => {
//                             console.log("failure4 : data was failure to store");
//                         }
//                     );
//                 },
//                 () => {
//                     console.log("failure3 : data was failure to store");
//                 }
//             );
//         },
//         () => {
//             console.log("failure2 : data was failure to store");
//         }
//     );
//     },
//     ()=> {
//         console.log("failure : data was failure to store");
//     }
// );

//this code is very confution, so some code structure chenage use for promise and then, catch methods;
//lets learn nest

// promise is a  object
function saveToDB(data) {
  return new Promise((resolve, reject) => {
    internatSpead = Math.floor(Math.random() * 10) + 1;
    if (internatSpead > 4) {
      resolve('your data was saved');
    } else {
      reject('data was failure to store');
    }
  });
}

// then and catch methods of promise object

// saveToDB("samarth patel")
//     .then(() => {
//         console.log("promissing was resoved");
//         console.log();
//     })
//     .catch(() => {
//         console.log("promising is rejected");
//         console.log(saveToDB);
//     });

//improve version of uper part -> callhell
//one time use catch because if not print the direct go catch like --> try  & catch consept learn before

// saveToDB("apna collage")
//     .then(() => {
//         console.log("data1 saved : promissing was resoved");
//         saveToDB("hello word")
//         .then(() =>{
//             console.log("data2 saved : promissing was resoved");
//             saveToDB("hello word you can success for 3")
//             .then(() => {
//                 console.log("data3 saved : promissing was resoved");
//             })
//         })
//     })
//     .catch(() => {
//         console.log("promising is rejected");
//     });

//more reduce

saveToDB('apna collage')
  .then((result) => {
    // result--> resolve
    console.log('data1 saved');
    console.log('result of promise : ', result);
    return saveToDB('hello word');
  })
  .then((result) => {
    // (then) use for secound data
    console.log('data2 saved');
    console.log('result of promise : ', result);
    return saveToDB('hello word you can success for 3');
  })
  .then((result) => {
    //this then use for thired data
    console.log('data3 saved');
    console.log('result of promise : ', result);
  })
  .catch((error) => {
    //comen for all
    console.log('promising is rejected');
    console.log('error : ', error); // error --> reject
  });

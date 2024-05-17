//JSON respons is send for string format 

//string to JS object

let JsonRes = 
        '{"fact":"Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that\u2019s for human consumption can cause malnutrition.","length":360}'
    console.log(JsonRes);  
    console.log(JsonRes.fact); //undefind not a object 
    
let valiedRes = JSON.parse(JsonRes);
console.log(valiedRes);
console.log(valiedRes.fact); //object so give ouput
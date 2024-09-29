const mongoose = requier("mongoose");

main().then( () => {
    console.log("serever is start");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: 
    {
        type: String,
        require : true,
    },

    author: {
        type: String,
    },

    price: {
        type: Number,
        
    },
});
const apple  = require("./apple");
const banana = require("./banana");
const mango = require("./mengo");

// Export an object with keys to access each fruit
module.exports = {
    apple: apple,
    banana: banana,
    mango: mango
};

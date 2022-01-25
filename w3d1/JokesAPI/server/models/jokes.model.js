const mongoose = require('mongoose'); // import mongoose so that we can use mongoose to make a collection


//the new mongoose.Schema({}) just allows us to write the instructions for what each ninja should have. The id field is auto generated so we don't need to fill it. 
const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        minlength: [10, "Setup must be at least 10 characters long"]
        },
    punchline: {
        type: String, 
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
});

//Here we are creating a variable Jokes, which is going to represent the name of our collection
const Jokes = mongoose.model('Jokes', JokeSchema);//mongoose is creating a collection called "Jokes" using the instructions from "JokeSchema"

module.exports = Jokes;
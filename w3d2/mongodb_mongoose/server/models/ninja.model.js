const mongoose = require('mongoose'); // import mongoose so that we can use mongoose to make a collection


//the new mongoose.Schema({}) just allows us to write the instructions for what each ninja should have. The id field is auto generated so we don't need to fill it. 
const NinjaSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First Name is required!"], 
        minlength: [2, "First name muse be at least two characters!"]
        },
    lastName: {
        type: String, 
        required: [true, "Last Name is required!"]
    },
    numBelts:{ 
        type: Number,
        required: [true, "Number of belts is required!"], 
        min: [0, "Number of belts must be at least 0!"]
    },
    isVeteran: {
        type: Boolean
    }
});

//Here we are creating a variable Ninja, which is going to represent the name of our collection
const Ninja = mongoose.model('Ninja', NinjaSchema);//mongoose is creating a collection called "Ninja" using the instructions from "NinjaSchema"

module.exports = Ninja;
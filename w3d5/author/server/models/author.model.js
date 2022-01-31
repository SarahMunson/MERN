const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AuthorsSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        unique: true,
        minlength: [3,"Name must be at least 3 characters!" ]
    }
})
AuthorsSchema.plugin(uniqueValidator, {type: 'mongoose-unique-validator'});

const Authors = mongoose.model('Authors', AuthorsSchema); //collection is named "Authors" and built using the AuthorsSchema through mongoose.model() => which is the mongoose command to build a new mongodb collection --tiny little parts working together.
module.exports = Authors; //exporting the variable which holds the requirements of the collection and the variable "Authors" is used to add data (with json to stringify js objects into text type) to the collection in the database.
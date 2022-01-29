const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        minlength: [3,"Name must be at least 3 characters!" ]
    }
})

const Authors = mongoose.model('Authors', AuthorsSchema); //collection is named "Authors" and built using the AuthorsSchema through mongoose.model() => which is the mongoose command to build a new mongodb collection --tiny little parts working together.
module.exports = Authors; //exporting the variable which holds the creation of the collection and I guess it's used to add info to the collection in the database.
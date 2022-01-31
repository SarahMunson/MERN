const Authors = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    console.log("working on an array of authors!")
    Authors.find().sort({authorName: 1}) //I know this mongoose function returns an array 
    .then( allAuthors => res.json({results: allAuthors})) //this allAuthors to arrow function takes the find information (an array) and puts it in this function under an object with the key results... response.json method comes from installing init -y, I think. That response is displayed in the web apps console. 
    .catch(err => res.json({ message: 'Something went wrong when finding all', error: err })); //.catch is related to mongoose, I believe..same as .then and .find... these are filled in with variables that take information from the database, either the list of authors or an error message and the response is translated by json (with permission given by express to do so in our server) and put into an object with a message key...
}

module.exports.findOneSingleAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id }) //useParams has definitely been a necessary part of all of holding id values from front end to backend. It was imported from react-router. Is react-router-dom a webpack? I could look more into webpacks and see their significance with this framework. 
        .then(oneSingleAuthor => { //again, .then is a mongoose function that takes the response, puts it in a variable that is read by json and recieved on the console as a key/value pair. 
            res.json({ results: oneSingleAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong finding one by id', error: err })); //.catch takes the response if it's an error and does the same thing as .then
}

module.exports.createNewAuthor = (req, res) => {
    Authors.create(req.body) //req.body represents the form info and is auto parsed by node module body-parser
        .then(newAuthor => {
            res.json({ results: newAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong when creating', error: err }));
}

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate( 
        { _id: req.params.id }, //params to update information about the author with this id
        req.body, //update with the object sent from the form req.body. req.body is a built in property of express... it uses middleware software express.urlencoded() and express.json() to return js objects
        { new: true, runValidators: true } //return back the newly updated Authors info true & true becurzzz else no return means no update.. so listen to this command, mongodb --mongoose sends it to help us
    )
        .then(updatedAuthor => res.json({ result: updatedAuthor })) //here we just want to return an object to hold the result so we can read it on our console that we have an updated author! Yay
        .catch(err => res.json({ message: 'Something went wrong when updating', error: err }));
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ results: result }) //basically all we need to do here is just have a result which says deletecount = 1. Not much else shows up in the console after this action happens.
        })
        .catch(err => res.json({ message: 'Something went wrong when deleting', error: err }));
}

module.exports.findRandomAuthor = (req, res) => {
    //get all the Authorss first then pick a random index 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    Authors.find()
        .then(allAuthors => {
            let randomIndex = getRandomInt(allAuthors.length)
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: "Something went wrong when trying to get random", error: err }))
}

//after building out these controllers, our webpage has the capacity to interact with the database to perform functions for Creating, Reading, Updating, and Deleting data! WOO HOO
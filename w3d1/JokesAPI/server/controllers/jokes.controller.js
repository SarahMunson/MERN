//controller needs to be able to talk to the models (the code that represents the DB collection)
const Jokes = require("../models/jokes.model");

module.exports.sayHello = (req, res) => {
    res.json({ msg: "hello Mongoose modularized!!" })

}

module.exports.findAllJokes = (req, res) => {
    console.log("running find all jokes!")
    Jokes.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({_id: req.params.id})
        .then(oneSingleJoke => res.json({ result: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body) //req.body represents the form info
        .then(newlyCreatedJoke => res.json({ result: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body, //information from the form
        { new: true, runValidators: true } //return back the newly updated joke info
    )
        .then(updatedJoke => res.json({ result: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

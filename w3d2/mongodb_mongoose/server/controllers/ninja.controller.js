
//controller needs to be able to talk to the models (the code that represents the DB collection)
const Ninja = require("../models/ninja.model");

module.exports.sayHello = (req, res) => {
    res.json({ msg: "hello Mongoose modularized!!" })

}

module.exports.findAllNinjas = (req, res) => {
    console.log("running find all ninjas!")
    Ninja.find()
        .then(allDaNinjas => res.json({ results: allDaNinjas }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })
        .then(oneSingleNinja => {
            res.json({ result: oneSingleNinja })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewNinja = (req, res) => {
    Ninja.create(req.body) //req.body represents the form info
        .then(newlyCreatedNinja => {
            res.json({ result: newlyCreatedNinja })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        { _id: req.params.id },
        req.body, //information from the form
        { new: true, runValidators: true } //return back the newly updated ninja info
    )
        .then(updatedNinja => res.json({ result: updatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomNinja = (req, res) => {
    //get all the ninjas first then pick a random index 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    Ninja.find()
        .then(allNinjas => {
            let randomIndex = getRandomInt(allNinjas.length)
            res.json({ results: allNinjas })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
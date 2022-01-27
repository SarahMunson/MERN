//controller needs to be able to talk to the models (the code that represents the DB collection)
const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    console.log("running find all Products!")
    Product.find()
        .then(allDaProducts => res.json({ results: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ results: oneSingleProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body) //req.body represents the form info
        .then(newProduct => {
            res.json({ results: newProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body, //information from the form
        { new: true, runValidators: true } //return back the newly updated Product info
    )
        .then(updatedProduct => res.json({ result: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ results: result })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomProduct = (req, res) => {
    //get all the Products first then pick a random index 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    Product.find()
        .then(allProducts => {
            let randomIndex = getRandomInt(allProducts.length)
            res.json({ results: allProducts })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
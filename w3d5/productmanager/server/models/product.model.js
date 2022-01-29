const mongoose = require('mongoose'); // import mongoose so that we can use mongoose to make a collection


//the new mongoose.Schema({}) just allows us to write the instructions for what each ninja should have. The id field is auto generated so we don't need to fill it. 
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required!"], 
        minlength: [2, "Title must be at least two characters!"]
        },
    price: {
        type: Number, 
        required: [true, "Price is required!"],
        min: [0.47, "minimum price is 47 cents!"]
    },
    description:{ 
        type: String,
        required: [true, "Description is required!"], 
        minlength: [2, "Description must be at least two characters!"]
    }
});

//Here we are creating a variable, which is going to represent the name of our collection
const Product = mongoose.model('Product', ProductSchema);//mongoose is creating a collection called "Product" using the instructions from "ProductSchema"

module.exports = Product;
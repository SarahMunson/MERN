const ProductController = require("../controllers/product.controllers")


module.exports = (app) => {
    app.get('/api/allproducts', ProductController.findAllProducts)
    app.post('/api/createproduct', ProductController.createNewProduct)
    app.get('/api/oneproduct/:id', ProductController.findOneSingleProduct)
    app.put('/api/updateproduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteproduct/:id', ProductController.deleteProduct)
}


const AuthorsControllers = require('../controllers/authors.controllers'); 


module.exports = (app) => { //this module.exports is present in routes, controllers, and model...this is how we acquire the methods and variables from one file to the next. Also, these are our endpoint apis.
    app.get('/test', AuthorsControllers.hello)
    app.get('/api/getall', AuthorsControllers.findAllAuthors)
    app.post('/api/createnew', AuthorsControllers.createNewAuthor)
    app.get('/api/findone/:id', AuthorsControllers.findOneSingleAuthor)
    app.put('/api/updateauthor/:id', AuthorsControllers.updateAuthor)
    app.delete('/api/deleteauthor/:id', AuthorsControllers.deleteAuthor)
}

const JokesController = require("../controllers/jokes.controller")



module.exports = (app) => {
    app.get("/api/hello", JokesController.sayHello)
    //can have more routes here
    app.get("/api/jokes", JokesController.findAllJokes)
    app.post("/api/jokes", JokesController.createNewJoke)
    app.get("/api/jokes/:id", JokesController.findOneSingleJoke)
    app.put("/api/jokes/:id", JokesController.updateJoke)
    app.delete("/api/jokes/:id", JokesController.deleteJoke)
} 
//import the controller file and give it a variable name to referenced
const NinjaController = require("../controllers/ninja.controller")



module.exports = (app) => {
    app.get("/api/hello", NinjaController.sayHello)
    //can have more routes here
    app.get("/api/ninjas", NinjaController.findAllNinjas)
    app.post("/api/ninjas", NinjaController.createNewNinja)
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)
    //routes with variables need to be towards the bottom
    app.get("/api/ninjas/:id", NinjaController.findOneSingleNinja)
    app.put("/api/ninjas/:id", NinjaController.updateNinja)
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)
} 
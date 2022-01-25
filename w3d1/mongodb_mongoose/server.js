const express = require("express"); //import express

const app = express(); //initialize express
const port = 8001; //specify port in variable

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./server/config/config")

//route for hello world just to make sure everything is connected
// app.get("/api/hello", (req, res) => {
//     res.json({msg: "hello Mongoose!"})
// })

require('./server/routes/ninja.routes')(app)

//listening for requests on this port

app.listen( port, () => console.log(`Listening on port: ${port}`))
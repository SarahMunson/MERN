const express = require('express'); //import express
const cors = require('cors') //importing cors (cross origin resource sharing) which allows us to share our API with react app
const app = express(); //initialize express
const port = 8001; //specify port in variable

app.use(express.json()) //to be able to read and extract information from received post requests
app.use(express.urlencoded({extended:true})) //be able to read information
app.use(cors()) //have the app be able to use "cross-origin-resource-sharing" features

//file imports go last, need the above code to be able to use app in files.

require('./server/config/config')

require('./server/routes/product.routes')(app)

//listening for requests on this port

app.listen( port, () => console.log(`Listening on port: ${port}`))
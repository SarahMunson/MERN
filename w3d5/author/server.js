const express = require('express'); //allows us to use the express framework which takes information from the webpage and passes it to the database. It's not the database but it gives access to them through endpoint routes. I should read more about how this works...
const cors = require('cors'); //cross origin resource sharing. Enables communication between front and back end frameworks. 
const app = express(); //an express instance put into a variable that we can pass along and perform important functions with express built-ins at our fingertips.
const port = 8000; //such an easy concept, but a deeper understanding would yield a deeper understanding of servers that could benefit me.

app.use(express.json()); //calling our builtin express ability to translate json from the post response. Is it into json or from json into english? I'm not sure. I think it takes our post request and feeds it to the database in a language the database can understand. Do most developers understand exactly what this and all other parts of the build do? 
app.use(express.urlencoded({extended:true})); //nifty code we copy and pasted just described as express allowing us to read information
app.use(cors()); //features of cors library at our fingertip --telling the app instance of express to use this library


require('./server/routes/authors.routes')(app); //passing the app variable to routes and routes to the server
require('./server/config/config'); //passing mongodb accessibility to the server

app.listen(port, () => console.log(`Listening on port: ${port}`)) //listen to establish and maintain a connection to the server --why do you have to pass port in to the listen call? port, some function.. it's interesting but I see this set up a lot. It's a method in react built this way and developers just seem to understand that it will be used like this. I'd like to know what I'm allowed to do...or why it's strict, or any/everything else there is to know.

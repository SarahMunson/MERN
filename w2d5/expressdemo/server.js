const express = require("express") //another way of saying import
const app = express(); //create a variable called app --> this variable is an instance of express
const port = 8000; //which port to run our API on

//need these two lines to be able to read and extract the information received from post request
app.use(express.json())
app.use(express.urlencoded({extended: true})) //be able to read form information

let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content: "A wise man once said nothing at all", author:"Wes"},
    {content: "Comparison is a thief of joy", author:"Theodore Roosevelt"},
    {content: "Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content: "You attract what you vibrate", author:"YouTube Guru"},
    {content: "Wherever you go, there you are.", author: "Eckhart Tolle"}
]


app.get("/api/quotes", (req, res) => {
    res.json({ count: quotes.length, results: quotes })
} )

//this is an API endpoint
app.get("/api/hello", (req, res) => {
    res.json({msg: "Hello Express"})
} )

app.get("/api/quotes/:idx", (req, res) => {
    res.json({results: quotes[req.params.idx]})
})

app.post("/api/quotes", (req, res) => {
    console.log("req.body", req.body)
    quotes.push(req.body) //push the form information into the quotes array
    res.json({count: quotes.length, results: quotes})
})

app.put("/api/quotes/:idx", (req, res) => {
    //two parts to a put request --> which thing we want to update (idx) and which data we want to use to update it with (req.body)
    quotes[req.params.idx] = req.body
    res.json({count: quotes.length, results: quotes})
})

app.delete("/api/quotes/:idx", () => {
    quotes.splice(req.params.idx, 1)
    
    res.json({count: quotes.length, results: quotes})
})

//this line is usually at the bottom and tests to see if our server is running.
app.listen( port, () => console.log(`Listening on port: ${port}`) );
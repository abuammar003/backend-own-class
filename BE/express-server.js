

// Basic Express.js Server =>

const Express = require("express");
const app = Express();

const users = [
{
    "name": "Abu Ammar",
    "age": 21    
},{
    "name": "Elon Musk",
    "age": 56
}, {
    "name": "Jeff Bezzos",
    "age": 62
}
];


app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
    res.send(users)
})


app.listen(8081, ()=> {
    console.log("My Express.js Server is Running on port 8081...");
});
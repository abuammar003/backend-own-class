

// Basic Express.js Server =>

const Express = require("express");
const app = Express();


// MiddleWare => Middleware aisa Function hota hai jo har Route se Pahele Chalta hai.
// eg: express.json() => for using JSON type Data, CORS() => .  
        //(req, res, next => Ye (min)teen cheezen dena Zaroori hai.)
        // req => it contains Users Data.  res => Servers Data, next=> Pass/Push to Next Route.

app.use(function(req, res, next) {
    console.log("Middleware Working")    
    next();
});


const users = [
{
    "id": 1,
    "name": "Abu Ammar",
    "age": 21    
},{
    "id": 2,
    "name": "Elon Musk",
    "age": 56
}, {
    "id": 3,
    "name": "Jeff Bezzos",
    "age": 62
}
];


app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});


        // /user=> Routing.
app.get("/users", (req, res) => {
    res.send(users)
})

        // /user/:id=> Nested & Dynamic Routing.
app.get("/users/:id", (req, res)=> {
    const { id } = req.params;
    const findUser = users.filter(usr=> usr.id === Number(id));

    res.send(findUser);
})


app.listen(8081, ()=> {
    console.log("My Express.js Server is Running on port 8081...");
});
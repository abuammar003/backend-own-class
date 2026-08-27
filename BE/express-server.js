

// Basic Express.js Server =>

const Express = require("express");
const app = Express();

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
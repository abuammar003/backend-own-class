

// Basic Express.js Server =>

const Express = require("express");
const app = Express();
let users = require("../BE/data");


app.use(function(req, res, next) {
    console.log("Middleware Working")    
    next();
});



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
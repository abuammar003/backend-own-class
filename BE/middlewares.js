// Middleware =>

const express = require('express');
const app = express();
const users = require("../BE/data");


// MiddleWare => Middleware aisa Function hota hai jo har Route se Pahele Chalta hai.
// eg: express.json() => for using JSON type Data, CORS() => .  

// It is always use by=> app.use() / --.use(express.json());

app.use(function(req, res, next) {
    console.log("Middleware is Working");
    next();
});


app.get("/", function(req, res) {
    res.send('<h1> This is MiddleWare Learning Server... </h1>');
});


app.get("/users", function(req, res) {
    res.send(users)
})


app.listen(8082, () => {
    console.log("MiddleWare's Server is Running on Port 8082");
});
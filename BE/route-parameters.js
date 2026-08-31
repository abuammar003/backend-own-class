// Route Parameters =>   (Dynamic Routes)
 
const express = require('express');
const app = express();
let users = require("../BE/data");


app.get("/", (req, res) => {
    res.send("<h1> This is Route Parameter Learning Server... </h1>");
});

app.get("/users", (req, res)=> {
    res.send(users)
});



// Dynamic Routing =>
    // app.get("/profile/:username", (req, res) => {  //( /:xyz => :colon ke baad ke route/cheez ko Params Kahte hai.

    //     // res.send(`<h1> Hello From ${req.params.username} </h1>`);  //Params ki Value ko req se Access Karte hain.
    //                     // OR
    //     let {username} = req.params;
    //     res.send(`<h1> Hello From ${username} </h1>`);

    // });


// Dynamic Routes for Users Data =>

    //1- Find User by id =>
    // app.get("/users/:id", (req, res) => {
    //     let { id } = req.params;
    //     let filtereUserbyId = users.filter(usr => usr.id === Number(id) );

    //     res.send(filtereUserbyId);
    // });


    // 2- Find user by name =>
    // app.get("/users/:name", (req, res) => {
    //     let {name} = req.params;
    //     let filterUserbyName = users.filter(usr => usr.name.toLowerCase() == name.toLowerCase());

    //     res.send(filterUserbyName);
    // });        
        

    //3- Filter by Both/Multiple Conditions =>
     app.get("/users/:username", (req, res) => {
        let {username} = req.params;
        let filterUser = users.filter(usr => usr.name.toLowerCase() == username.toLowerCase() ||
            usr.id === Number(username));

        res.send(filterUser);
    });        



app.listen(8083, () => {
    console.log("Route Parameter's Server is Running on Port 8083");
});

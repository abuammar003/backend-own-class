
// CRUD Operation =>

const express = require("express");
const app = express();

app.use(express.json());      //express.json() => Middleware for using JSON TYPE Data.

const users = [
    {
        id: 1,
        name: "Abu Ammar",
        email: "ammar@example.com"
    }, {
        id: 2,
        name: "Shah Saad",
        email: "saads@gmail.com"
    }, {
        id: 3,
        name: "Yaseen Shah",
        email: "shahyaseen@example.com"
    }, {
        id: 4,
        name: "Mohammed Affan",
        email: "affanzs@shop.com"
    }, {
        id: 5,
        name: "Musaddique Shaikh",
        email: "musaddiqueshaikh@gmail.com"
    }
];


//1- READ (GET Method) =>

// GET (READ all users) =>
app.get("/", (req, res) => {
    res.json(users);

    res.status(200).json({
        message: "Users Data Displayed Succesfully."
    });
});

// GET (READ by id and name) =>
app.get("/:user", (req, res) => {
    const {user} = req.params;

    const findUser = users.find((usr)=> 
        usr.id === Number(user) || usr.name.toLowerCase() === user.toLowerCase());

    // Error Handling.
    if(!findUser) {
        return res.status(404).json({
            message: "User NOT FOUND."
        });
    }

    // res.json(findUser);    //Filtered User's Data.

    res.status(200).json({
        message: "User Filterd by id & name.",
        users: findUser
    });
});




//2- CREATE (POST Method) =>
app.post("/", (req, res) => {
    const {name, email} = req.body;

    const addUser = {
        // id: new Date.now(),     //IT Will Return Unique ids for every new User.
        id: users.length +1,     //IT Will Return id based on length of the users array.
        name,
        email,
    };

    users.push(addUser);

    res.status(201).json({
        message: "New User Created Successfully."
    });
    res.json(users);
});




//3- UPDATE (PUT Method) =>
app.put("/:id", (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    const findUser = users.find((usr)=> usr.id === Number(id));

    // Error Handling.
    if(!findUser) {
        return res.status(404).json({
            message: "User NOT FOUND."
        });
    }

    findUser.name =  name;
    findUser.email = email;

    res.status(200).json({
        message: "User Updated Succesfully.",
        users: findUser
    });
 
});



//4- DELETE (DELETE Method) =>
app.delete("/:id", (req, res) => {
    const {id} = req.params;

    const findUser = users.findIndex((usr)=> usr.id === Number(id));

    // Error Handling.
    if(!findUser) {
        return res.status(404).json({
            message: "User NOT FOUND."
        });
    };

    const updatedUser = users.splice(findUser, 1);

    res.status(200).json({
        message: "User Deleted Successfully.",
        user: updatedUser[0]
    });
});


app.listen(8085, () => {
    console.log("CRUD Operations Server Running on PORT 8080...");
});


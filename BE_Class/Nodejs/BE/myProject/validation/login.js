//Validation in LogIn Form By Backend => 

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(cors({
//         origin: "*" 
// }));


// const users = [];

// app.get("/", (req,res) => {
//         res.send(users);
// });

// app.post("/login", (req, res) => {
//         const {name, email, password, confPass} = req.body;

//         if(!name || !email || !password ||!confPass) {
//                 return res.status(400).json({error: "All Fields are Required!"});
//         }

//         const emailFormate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if(!emailFormate.test(email)) {
//                 return res.status(400).json({error: "Invalid E-mail Formate!"});
//         }

//         if(password.length < 8) {
//                 return res.status(400).json({error: "Password Must be Minimum 8 Character!"});
//         }

//         if(password !== confPass) {
//                 return res.status(400).json({error: "Password Do not Match!"});
//         }

//         const newUser = {name, email, password, confPass}
//         users.push(newUser);

//         res.status(200).json("LogIn SuccessFull!");

// });


// app.listen("8081", () => {
//         console.log("LogIn Form Server is Active");
// });





const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
     origin: "*"
}))      

const user = [];

app.post("/login", (req, res) => {
     const {name, email, password, confPass} = req.body;
     
     if(!name || !email || !password || !confPass) {
           return  res.status(400).json({error: "All fields are required"});
     }

     const mailFormate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!mailFormate.test(email)) {
             return res.status(400).json({error: "Enter a valid email"});
     }

     if(password.length <8){
             return res.status(400).json({error: "Password must be minimum 8 character"});
     }

     if(password !== confPass) {
             return res.status(400).json({error: "Password doesn't match"})
     }

     const newUser = {name, email};
     user.push(newUser);
     
     res.status(200).json({
             newUser,
             message: "Login SuccessFull",
             status: 200
     });


});

app.get("/", (req, res) => {
     res.send(user);     
})

app.listen("8081", () => {
     console.log("User Data of Login Form is Active");      
});

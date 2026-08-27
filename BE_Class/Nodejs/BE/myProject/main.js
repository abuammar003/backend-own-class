// const test = "hello world!";
// console.log(test);

// const calc = "Here is the Practice Calculator =>";
// console.log(calc);

// const {add, sub, multiply, devide}= require("./myFunctions/calculate.js");
// console.log(`Addition: ${add(5, 9)}`);
// console.log(`Subtraction: ${sub(20, 5)}`);
// console.log(`Multiplication: ${multiply(5, 10)}`);
// console.log(`Division: ${devide(20, 4)}`);

// const {EmployeeList, vacancies}  = require("./myFunctions/listData.js");
// console.log("Here is the List of Employees =>");

// EmployeeList.forEach((element) => {
//         console.log(`ID: ${element.id}, Name: ${element.name}, Position: ${element.position}, Salary: ${element.salary}`);
// });

// console.log("Here are some Job Vacancies =>");
// vacancies.forEach((item) => {
//         console.log(`ID: ${item.id}, Post: ${item.post}, Vacancies: ${item.vacancy}, Package: ${item.package}`);
// });

// const express = require("express");

// const app = express();

// app.use(express.json());

// const users = [
//   {
//     id: 1,
//     name: "Ammar",
//     city: "Malegaon",
//   },
//   {
//     id: 2,
//     name: "Abdul",
//     city: "MHB Colony",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(users);
// });

// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(typeof id);
//   const findUser = users.find((user) => user.id == id);

//   res.send(findUser);
// });

// // app.post("/", (req, res) => {
// //   const { id, name, city } = req.body;

// //   if (!id || !name || !city) {
// //     return res.json({
// //       message: "all fields are required!",
// //       success: false,
// //     });
// //   }

// //   const newUser = {
// //     id: id,
// //     name: name,
// //     city: city,
// //   };

// //   users.push(newUser);

// //   res.json({
// //     newUser,
// //     message: "New User Created",
// //     success: true,
// //   });
// // });

// app.listen(8080, () => {
//   console.log("Server Runnning on 8080");
// });



// const express = require("express");

// const app = express();

// app.use(express.json());

// let users = [
//   {
//     id: 1,
//     name: "Ammar",
//     city: "Malegaon"
//   }, {
//     id: 2,
//     name: "Abu",
//     city: "Nashik"
//   },{
//     id: 3,
//     name: "Faisal",
//     city: "Mumbai"
//   }
// ];

// app.get("/", (req, res) => {
//   res.send(users);
// });

// app.get("/:id", (req, res) => {
//   const {id} = req.params;
//   const findUser = users.find((user) => user.id == id);

//   res.send(findUser);
// });

// app.post("/", (req, res) => {
//   const {id, name, city } = req.body;

//   const newUser = {
//     id: id,
//     name: name,
//     city: city
//   };

//   users.push(newUser);

//   res.json({
//     newUser,
//     message: "New User Created",
//     success: true
//   });

// })

// app.listen(8080, () => {
//   console.log("Starting My Server 8080");
// });






//Give Data to Front-End from API =>

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(cors());

// // const userAPI = {
// //   origin: "*",
// //   success: 200,
// // };

// const data = [
//   {
//     name: "Abu Ammar",
//     email: "abuammar@gmail.com",
//     number: "2154836548",
//   },
//   {
//     name: "Abdul",
//     email: "abdul@gmail.com",
//     number: "8458798484",
//   },
//   {
//     name: "Jack",
//     email: "jack@gmail.com",
//     number: "2134568748",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(data);
// });

// app.get("/:name", (req, res) => {
//   const { name } = req.params;
//   const findUser = data.filter((data) => data.name === name);

//   res.send(findUser);
// });

// app.post("/addUser", (req, res) => {
//   const { name, email, number } = req.body;
//   console.log(req.body)
//   const newUser = { name, email, number };

//   data.push(newUser);

//   res.json({
//     newUser,
//     message: "New User Added",
//     success: true,
//   });
// }); 

// app.listen("8080", () => {
//   console.log("Users Data From localhost:3000");
// });





// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(cors());

// const userAPI = {
//   origin: "*",
//   success: 200
// }

// const data = [
//   {
//     id : 1,
//     name : "Abu",
//     email : "abu@gmail.com",
//     number : "85435414463"
//   }, {
//     id : 2,
//     name : "Ammar",
//     email : "ammar@gmail.com",
//     number : "85435414463"
//   }, {
//     id : 3,
//     name : "Abdullah",
//     email : "abdullah@gmail.com",
//     number : "85435414463"
//   }
// ];

// app.get("/", (req, res) => {
//   res.send(data)
// });

// app.get("/:name", (req, res) => {
//   const {name} = req.params;
//   const findUser = data.filter((user) => { user.name === name });

//   res.send(findUser);
// });

// app.post("/addUser", (req, res) => {
//   const {id, name, email, number} = req.body;
//   const newUser = {id, name, email, number};

//   data.push(newUser);

//   res.json({
//     newUser,
//     message: "New User Added Successfully!",
//     success: 200
//   });
// });



// app.listen("8080", () => {
//   console.log("My User Data's Server is Active")
// });






const express = require("express");
const users = require("./MOCK_DATA.json");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  success: 200
}));

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/users", (req, res) => {
  res.send(users)
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.filter(usr => usr.id === Number(id));

  res.send(findUser);
});


app.post("/users/addUser", (req, res) => {
  const {id, first_name, last_name, email} = req.body;
  const newUser = {id, first_name, last_name, email};

  users.push(newUser);

  res.status(200).json({
    newUser,
    message: "New User Added Successfully!",
  });
});


app.listen("8080", () => {
  console.log("My User Data's Server is Active")
});

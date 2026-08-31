// let name = "ammar";
// let age = 19;
// console.log(name, age);

// ------------- Marks Calculator --------------
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your Marks: ", (marks) => {
//     marks = parseInt(marks); 

//     if (marks >= 80 && marks <= 100) {
//         console.log("Passed by O grade");
//     } else if (marks >= 70 && marks < 80) {
//         console.log("Passed by A+ grade");
//     } else if (marks >= 60 && marks < 70) {
//         console.log("Passed by A grade");
//     } else if (marks >= 50 && marks < 60) {
//         console.log("Passed by B grade");
//     } else if (marks >= 45 && marks < 50) {
//         console.log("Passed by C grade");
//     } else if (marks >= 35 && marks < 45) {
//         console.log("Passed by Pass Grade");
//     } else if (marks >= 0 && marks < 35) {
//         console.log("Fail");
//     } else {
//         console.log("Invalid input. Please enter a number between 0 and 100.");
//     }

//     rl.close(); 
// });


// ------------------ Propmt Calculator -------------------
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question("What is Your Name:", (name) => {
//     console.log("Hello", name);
//     rl.close();
// });






const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Server no. 8080</h1>")
  res.end('My Name is Ammar!');
}).listen(8080);


let server = require("http");

server.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write("<h1>Server no. 8081</h1>")
  res.end('My Name is Server!');
}).listen(8081);


let myServer = require("http");

myServer.createServer(function(req, res) {
  res.writeHead(200, {"content-type" : "text/html"});
  res.write("<h1>This is Final Server</h1>");
  res.write("<h2>Server no. 8082</h2>");
  res.end("Good By!");
}).listen(8082);


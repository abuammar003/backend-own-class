// ---------------- Modules -----------------

//---req means request---
//---res means response---

//-------------- 1- http => (Type of Module) ----------------

// const http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end("Hello World!");
// }).listen(8080);

// var http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.write("<h2>Welcome to New Website</h2>");
//     res.write("<h3>My Name is Ammar</h3>");
//     res.write("<p>In Node.js, a module is a self-contained block of code that encapsulates related functionality. Each file in a Node.js application is treated as a separate module. Modules help in organizing code, promoting reusability, and avoiding naming conflicts.</p>");
//     res.end();
// }).listen(8080);

// let http = require ("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.write("<h1>Hello World!</h1>");
//     res.write("<h3>Welcome to New Website</h3>");
//     res.end();
// }).listen(8081)

// let http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end("Hello World!");
// }).listen(8080);

// let server = require("http");

// server
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>Hello World!</h1>");
//     res.write("<h3>Welcome to the Website</h3>");
//     res.write(
//       "<p>Consider modules to be the same as JavaScript librariesA set of functions you want to include in your application.</p>"
//     );
//   })
//   .listen(8080);

const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>I am Server</h1>");
  res.write("<h3>You can use me from anywhere</h3>");
  res.end("<p>Consider me as a Intelligence and for any work use me!</p>");
});

server.listen(3000, () => {
  console.log("Server is running");
});

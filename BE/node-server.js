
// Basic Node.js Server=>

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<h1>Hello World!</h1>");
    res.write("<h2>This is my Node.js Server</h2>");
    res.write("<h4>It is for Learning</h4>");
    res.end("Thank You!");
});

server.listen(8080, () => {
    console.log("Node.js Server is Running on port 8080...");
});
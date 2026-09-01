// Template Engines => (ejs).

const express = require("express");
const app = express();


app.set("view engine", "ejs");    //To configure ejs in the File.

app.use(express.static('./public'));


app.get("/", function(req, res) {
    res.send("<h1> Template Engines (ejs) Server...  <p> /about: for file1.ejs <br /> /contact: for file2.ejs  </p> </h1>");
});


    // Render ejs File => ejs file ko render karte waqt render me views folder ki file ka name likhna hai bas.
    app.get("/about", (req, res) => {
        res.render("file1.ejs");         // Use 'render' To get ejs file.
    });

    app.get("/contact", (req, res) => {
        res.render("file2");
    })


app.listen(8084, () => {
    console.log("Template Engines (ejs) server is Running on Port 8084");
});
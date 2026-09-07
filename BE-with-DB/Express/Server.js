

const express = require('express');
const dotenv = require('dotenv').config();     // .config() => is used to Configure dotenv.
const app = express();
const Port = process.env.PORT || 5000;    //The PORT no is coming from .env File &|| 5000 is Added if PORT NotFound.

app.get('/', (req, res) => {
    res.send('Hello World! How are you.');
});


//Here We Importing Product api and Using as Middleware.
app.use("/api/products", require('./Routes/products'));     // "/api/products" => Route of this File/API.


app.listen(Port, () => {
    console.log(`Server Running on port ${Port}...`);
});



//Products API => 

const express = require("express");
const ProductsData = require("./PRODMOCK_DATA (2).json");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
        origin: "*",
        success: 200
}));


app.get("/products", (req, res) => {
        res.send(ProductsData);
}); 

app.get("/products/:id", (req, res) => {
        const {id} = req.params;
        const findProduct = ProductsData.filter(item => item.id === Number(id) );
        res.send(findProduct);
});

app.post("/products/addProduct", (req, res) => {
        const {id, image, title, price, description} = req.body;
        const newProduct = {id, image, title, price, description};

        ProductsData.push(newProduct);

        res.status(200).json({
                newProduct,
                message: "New Product is Added successful"
        });
});

app.listen("8080", () => {
        console.log("Products Data Server is Active");
});
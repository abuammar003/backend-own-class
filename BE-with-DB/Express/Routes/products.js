
// Here We Creates Rout of Products API and Export and then Use it in Server.js as a Middleware.

const express = require("express");
const router = express.Router();

router.use(express.json());

const products = [
    {
        id: 1,
        name: "Mac Book 2",
        price: 180000,
        category: "electronics"
    }
];


// READ.
router.get("/", (req, res) => {
    res.status(200).json({
        message: "This is Products API...",
        products: products
    });
});
    // READ by ID.
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const findProduct = products.find((item)=> item.id === id);

    if(!findProduct) {
        return res.status(404).json({
            message: "Product Not Found"
        });
    }

    res.status(200).json(findProduct);
});


// CREATE.
router.post("/", (req, res) => {
    const {name, price, category} = req.body;

    const addProduct = {
        id: Date.now(),
        name,
        price,
        category
    };

    products.push(addProduct);


    res.status(201).json({
        message: "Created Product Successfully.",
        product: addProduct
    });

});


// UPDATE.
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const {name, price, category} = req.body;

    const findProduct = products.find((item)=> item.id === id);

    if(!findProduct) {
        return res.status(404).json({
            message: "Product Not Found."
        });
    }

    findProduct.name = name;
    findProduct.price = price;
    findProduct.category = category;

    res.status(200).json({
        message: "Updated Product Successfully.",
        product: findProduct
    });
});


// DELETE.
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const findProduct = products.findIndex((item)=> item.id === id);

    if(!findProduct) {
        return res.status(404).json({
            message: "Product Not Fount"
        });
    }

    const updatedProduct = products.splice(findProduct, 1);

    res.status(200).json({
        message: "Product Deleted Successfully.",
        Deleted_Product: updatedProduct[0]
    });
});

module.exports = router;     //Exporting This Server/API/Page/File.
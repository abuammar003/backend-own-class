// In this File We will Create Controllers like CRUD of the Products file(Products API).
// (Createing Arrow Function of the CRUD in Controllers and Pass it into Products.js File).


// Products Data Stored in "../Data/productsData.js" & we are using it here.
const products = require("../Data/productsData");



// @desc READ Products.    
// @route GET /api/products
const getProducts =  (req, res) => {
    res.status(200).json({
        message: "This is Products API...",
        products: products
    });
};

// @desc READ Products by ID.       
// @route GET /api/products/:id
const getProductsByID = (req, res) => {
    const id = Number(req.params.id);

    const findProduct = products.find((item)=> item.id === id);

    if(!findProduct) {
        return res.status(404).json({
            message: "Product Not Found"
        });
    }

    res.status(200).json(findProduct);
};



// @desc CREATE Products.    
// @route POST /api/products
const postProduct = (req, res) => {
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

};


// @desc UPDATE Product.    
// @route PUT /api/products/:id
const updateProduct =(req, res) => {
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
};


// @desc DELETE Product.    
// @route DELETE /api/products/:id
const deleteProduct = (req, res) => {
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
};


module.exports = {getProducts, getProductsByID, postProduct, updateProduct, deleteProduct};

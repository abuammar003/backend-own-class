
// Here We Creates Rout of Products API and Export and then Use it in Server.js as a Middleware.

const express = require("express");
const router = express.Router();
const {getProducts, getProductsByID, postProduct,
     updateProduct, deleteProduct} = require("../Controllers/productController");   //CRUD Operations Written Here.

router.use(express.json());



// READ.
router.get("/", getProducts);   //getProducts=> Comes from "../Controllers/productController.js";

    // READ by ID.
router.get("/:id", getProductsByID);


// CREATE.
router.post("/", postProduct);


// UPDATE.
router.put("/:id", updateProduct);


// DELETE.
router.delete("/:id", deleteProduct);

module.exports = router;     //Exporting This Server/API/Page/File.
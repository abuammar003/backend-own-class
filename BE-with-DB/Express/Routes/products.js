
// Here We Creates Rout of Products API and Export and then Use it in Server.js as a Middleware.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "This is Products API..."
    });
});

module.exports = router;     //Exporting This Server/API/Page/File.
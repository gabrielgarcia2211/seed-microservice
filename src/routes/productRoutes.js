const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/report", productController.getProducts);

module.exports = router;
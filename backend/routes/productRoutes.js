const { Router } = require("express");
const Product = require("../Model/productModel");
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProducts,
} = require("../Controllers/productController");

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.delete("/", deleteProducts);

module.exports = router;

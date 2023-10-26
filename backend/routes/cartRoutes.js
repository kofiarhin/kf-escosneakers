const { Router } = require("express");
const { auth, authAdmin } = require("../middleware/auth");

const {
  createCart,
  getCart,
  getCarts,
} = require("../Controllers/cartController");

const router = Router();

// create cart
router.post("/create", auth, createCart);

// get carts
router.get("/", authAdmin, getCarts);

// get cart
router.get("/:id", auth, getCart);

module.exports = router;

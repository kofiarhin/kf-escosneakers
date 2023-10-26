const Cart = require("../Model/cartModel");

const createCart = async (req, res) => {
  const { products } = req.body;

  try {
    const cart = new Cart({
      userId: req.user._id,
      products,
    });

    await cart.save();

    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};

// get carts
const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    if (!carts) return res.status(400).json({ error: "carts not found" });
    return res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ errorr: "internal server error" });
  }
};

// get cart

const getCart = async (req, res) => {
  const id = req.params.id;

  try {
    const cart = await Cart.findById(id);
    if (!cart) return res.status(400).json({ error: "cart not found" });

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "internal sever error" });
  }
};

module.exports = {
  createCart,
  getCart,
  getCarts,
};

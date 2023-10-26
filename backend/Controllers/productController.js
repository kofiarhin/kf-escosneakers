const Product = require("../Model/productModel");

// get products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) return res.status(404).json({ error: "product not found" });

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

// get product
const getProduct = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(400).json({ error: "product not found" });
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const createProduct = async (req, res) => {
  const { name, price, quantity, img } = req.body;

  try {
    const product = await new Product({
      name,
      price,
      quantity,
      img,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.json({ error: "something went wrong" });
    console.log(error);
  }
};

const deleteProducts = async (req, res) => {
  await Product.deleteMany();

  res.json({ message: "product deleted" });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProducts,
};

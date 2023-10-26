const mongoose = require("mongoose");

// structure

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
    default: ["s", "m", "l", "xl"],
  },
  color: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    default: "clothing",
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);

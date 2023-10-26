require("dotenv").config();
const connect = require("./backend/config/db");
const fs = require("fs");
const Product = require("./backend/Model/productModel");

connect();

const run = async () => {
  const products = await Product.find();

  console.log(products);
};

run();

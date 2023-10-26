require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const connect = require("./config/db");
const data = require("./data/data");
// connect to database
connect();
// midelewares
app.use(cookieParser());
app.use(express.static("backend/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({
    message: "get index file",
  });
});
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started: ${port}`));

const express = require("express");
const products = require("./products");

const app = express();

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

const port = 5000;
app.listen(port, (req, res) => {
  console.log(`server run successfully on port ${port}`);
});

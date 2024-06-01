const express = require("express");
const { getProduk, addProduk, updateProduk, deleteProduk, getProdukById } = require("../controller/produkController.js");
const route = express.Router();

route.get("/produk", getProduk);
route.get("/produk/:id_produk", getProdukById);
route.post("/produk", addProduk);
route.put("/produk/:id_produk", updateProduk);
route.delete("/produk/:id_produk", deleteProduk);

module.exports = route;

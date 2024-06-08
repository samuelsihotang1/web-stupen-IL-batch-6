const express = require("express");
const { getPesanan, getPesananById, addPesanan, updatePesanan, deletePesanan } = require("../controller/pesananController.js");
const route = express.Router();

route.get("/pesanan", getPesanan);
route.get("/pesanan/:id_pesanan", getPesananById);
route.post("/pesanan", addPesanan);
route.put("/pesanan/:id_pesanan", updatePesanan);
route.delete("/pesanan/:id_pesanan", deletePesanan);

module.exports = route;

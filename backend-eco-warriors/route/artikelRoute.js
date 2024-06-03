const express = require("express");
const { getArtikel, addArtikel, updateArtikel, deleteArtikel, getArtikelById } = require("../controller/artikelController.js");
const route = express.Router();

route.get("/artikel", getArtikel);
route.get("/artikel/:id_artikel", getArtikelById);
route.post("/artikel", addArtikel);
route.put("/artikel/:id_artikel", updateArtikel);
route.delete("/artikel/:id_artikel", deleteArtikel);

module.exports = route;

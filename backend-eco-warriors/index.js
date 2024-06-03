const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routeProduk = require("./route/produkRoute");
const routeArtikel = require("./route/artikelRoute");

const dotenv = require("dotenv");
const { testConnection } = require("./database/Db");
dotenv.config();

app.use(bodyparser.json());
app.use(routeProduk);
app.use(routeArtikel);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});

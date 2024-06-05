const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routeProduk = require("./route/produkRoute");
const routeArtikel = require("./route/artikelRoute");
const routeUser = require("./route/userRoute");
const routePesanan = require("./route/pesananRoute");

const dotenv = require("dotenv");
const { testConnection } = require("./database/Db");
dotenv.config();

app.use(bodyparser.json());
app.use(routeProduk);
app.use(routeArtikel);
app.use(routeUser);
app.use(routePesanan);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});

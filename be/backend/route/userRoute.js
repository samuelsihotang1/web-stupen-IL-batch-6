const express = require("express");
const { getUser, getUserById, addUser, updateUser, deleteUser } = require("../controller/userController.js");
const route = express.Router();

route.get("/user", getUser);
route.get("/user/:user_id", getUserById);
route.post("/user", addUser);
route.put("/user/:user_id", updateUser);
route.delete("/user/:user_id", deleteUser);

module.exports = route;

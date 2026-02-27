const express = require("express");

const carrorouter = express.Router();
const carrocontroller = require("../controller/carro.controller");

carrorouter.post("/carrocadastro", carrocontroller.novoCarro);
carrorouter.get("/listarcarro", carrocontroller.listarcarro);

module.exports = carrorouter;
const express = require("express");
const router = express.Router();

const carrocontroller = require("../controller/carro.controller");

router.post("/carro", carrocontroller.novoCarro);

module.exports = router;
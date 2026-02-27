const express = require("express");
const router = express.Router();

const clientecontroller = require("../controller/cliente.controller");

router.post("/clienetcadastro", clientecontroller.novoCliente);

module.exports = router;
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const carrorouter = require("./src/routes/carro.routes");

const app = express();
  
app.use(express.json());
app.use(cors());

app.use(carrorouter);

/* Importar rotas e aplica-las */

/* Fim das rotas */

app.listen(process.env.PORT_APP, () => {
    console.log("online na porta "+ process.env.PORT_APP);
});
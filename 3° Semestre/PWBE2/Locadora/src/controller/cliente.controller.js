const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    const cliente= req.body;


    const ncliente = await prisma.cliente.create({
        data: cliente
    });

        res.json(ncliente).status(201).end();
};

module.exports = {
    novoCliente
}
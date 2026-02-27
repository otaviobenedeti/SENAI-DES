// const prisma = require("../data/prisma");

// const novoCarro = async (req, res) => {
//     const carro = req.body;

//     const ncarro = await prisma.carros.create({
//         data: carro
//     });

//         res.json(ncarro).status(201).end();
// };

const { error } = require("console");
const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    try {
        const carro = req.body;

        if (!carro.placa || carro.placa.trim().length === 0) {
            return res.status(400).json({ erro: "Placa obrigatória" });
        }

        carro.placa = carro.placa.trim().replace(/\s/g, "").toUpperCase();

        if (carro.placa.length !== 7) {
            return res.status(400).json({ erro: "Placa deve ter 7 caracteres" });
        }

        if (carro.placa.includes(" ")) {
            return res.status(400).json({ erro: "Placa não pode conter espaços" });
        }

        const carros = await prisma.carros.findMany();

        const placaExiste = carros.some(c =>
            c.placa.toUpperCase() === carro.placa
        );

        if (placaExiste) {
            return res.status(400).json({ erro: "Placa já cadastrada" });
        }

        
    let marca = carro.marca;
    let modelo = carro.modelo;

    if (!marca || marca.trim() === "")
        return res.status(400).json({ message: "Marca obrigatória" })

    if (!modelo || modelo.trim() === "")
        return res.status(400).json({ message: "Modelo obrigatório" })

    marca = marca.trim();
    modelo = modelo.trim();

    let partesMarca = marca.split(" ");
    let partesModelo = modelo.split(" ");

    marca = partesMarca.map(p =>
        p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
    ).join(" ");

    modelo = partesModelo.map(p =>
        p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
    ).join(" ");

    carro.marca = marca;
    carro.modelo = modelo;


        if (!carro                                                                                                                        .ano || carro.ano.length !== 4) {
            console.log(error);
            return res.status(400).json({ erro: "Ano deve ter 4 dígitos" });
        }

        const temletra = carro.ano.split("").some(c =>
            c.toLowerCase() !== c.toUpperCase()
        );

        if (temletra) {
            return res.status(400).json({ erro: "Ano não pode conter letras" });
        }

        const novo = await prisma.carros.create({
            data: carro
        });

        return res.status(201).json(novo);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ erro: "Erro interno" });
        
    }
};

const listarcarro = async (req, res) => {
    const lcarro = await prisma.carros.findMany();

    res.json(lcarro).status(200).end();
};

// const buscarTurma = async (req, res) => {
//     const { id } = req.params;

//     const turma = await prisma.turmas.findUnique({
//         where: { id },
//         include: {
//             alunos: true
//         }
//     });

//     res.json(turma).status(200).end();
// };

// const apagarTurma = async (req,res) => {
//     const { id } = req.params;
// }

module.exports = {
    novoCarro,
    listarcarro
}
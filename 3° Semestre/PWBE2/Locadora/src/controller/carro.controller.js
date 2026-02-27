const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    const carro = req.body;


    const ncarro = await prisma.carro.create({
        data: carro
    });

        res.json(ncarro).status(201).end();
};

//     res.json(ncarro).status(201).end();
// };

// const listarTurmas = async (req, res) => {
//     const turmas = await prisma.turmas.findMany();

//     res.json(turmas).status(200).end();
// };

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
    novoCarro
}
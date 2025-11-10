import express from "express";
const router = express.Router();

// Importando os Models
import doador from "./models/Doador.js"

// ROTA doadores
router.get("/doadores", function (req, res) {
  const doadores = [
    {
      nome: "Diego Max",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Pétalas, 123, Bairro Jardim Primavera, Cidade Amor, Estado Felicidade, CEP: 12345-678",
    },
    {
      nome: "Wagner Toth",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Thissiany Almeida",
      cpf: "456.789.123-00",
      endereco:
        "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Cadu Silva",
      cpf: "321.654.987-00",
      endereco:
        "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
  ];
  res.render("doadores", {
    doadores: doadores,
  });
});

export default router;

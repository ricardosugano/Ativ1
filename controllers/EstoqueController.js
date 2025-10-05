import express from "express";
const router = express.Router();

// ROTA ESTOQUE
router.get("/estoque", function (req, res) {
  const estoque = [
    { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
  ];
  res.render("estoque", {
    estoque: estoque,
  });
});

export default router;
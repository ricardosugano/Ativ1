import express from "express";
const router = express.Router();

// ROTA ESTOQUE
router.get("/estoque", function (req, res) {
  const estoque = [
    { nome: "Arroz", preco: 35, categoria: "Cesta Basica" },
    { nome: "Frango", preco: 50, categoria: "Mistura" },
    { nome: "Feijao", preco: 20, categoria: "Cesta Basica" },
    { nome: "Oleo Vegetal", preco: 10, categoria: "Tempero" },
  ];
  res.render("estoque", {
    estoque: estoque,
  });
});

export default router;
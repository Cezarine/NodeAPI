import express from "express";
import LivroController from "../controller/livrosControllers.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivrosId)
    .post("/livros",LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizaLivro)
    .delete("/livros/:id", LivroController.deletaLivro);

    export default router;
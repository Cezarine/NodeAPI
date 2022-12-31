import express from "express";
import AutorController from "../controller/autoresControllers.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresId)
    .post("/autores",AutorController.cadastrarLivro)
    .put("/autores/:id", AutorController.atualizaLivro)
    .delete("/autores/:id", AutorController.deletaLivro);

export default router;
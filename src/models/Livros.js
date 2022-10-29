import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, requerided: true},
        autor:  {type: String, requerided: true},
        editora:{type: String, requerided: true},
        numeropagina:{type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;
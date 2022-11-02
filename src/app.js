import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de Conexao'));
db.once("open", () => { console.log('Conexao com o banco feita com sucesso')});
const app = express();
app.use(express.json());
routes(app);
export default app;
// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "O Hobbit"}
// ]
//---------------GETS---------------//
// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivroId(req.params.id);
//     res.status(200).json(livros[index]);
// })

//---------------PUTS---------------//
// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivroId(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

//---------------DELETES---------------//
// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params;//--Consigo buscar direto o 'id' do requerimento
//     let index = buscaLivroId(id);
//     livros.splice(index, 1);//--Apaga no apartir do (index) e quantos apartir dele (1)
//     res.send(`O Livro ${id} foi excluido com sucesso!`);   
// })

//---------------FUNCTIONS---------------//
// function buscaLivroId(id){
//     //---Para cada elemento(livro) dentro de livro.findIndex, irei verificar se livro.id e igual ao id que passei
//     return livros.findIndex(livro => livro.id == id); 
// }

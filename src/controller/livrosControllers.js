import livros from "../models/Livros.js";

class LivroController{
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivrosId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if (err) {
                res.status(400).send({message: `Livro do ID: ${id}, nao encontrado, verifique o codigo do livro e tente novamente: ${err.message}`});
            } else {
                res.status(200).json(livros);
            }
        });  
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err){
                res.status(500).send({message: `Erro ao cadastrar o livro: ${err.message}`});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizaLivro = (req, res) => {
        const id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err)
            {
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            }
            else
            {
                res.status(500).send({message: `Erro ao atualizar livros: ${err.message}` })
            }
        });
    }

    static deletaLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Livro nao encontrado verifique o codigo do livro: ${err.message}`});
            } else {
                res.status(200).send({message: `Livro ${id} excluido com sucesso!`});
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora
        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }

}
export default LivroController;
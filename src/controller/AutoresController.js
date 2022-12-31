import autores from "../models/Autor";

class AutorController{
    static listarautores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarautoresId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `Autor do ID: ${id}, nao encontrado, verifique o codigo do Autor e tente novamente: ${err.message}`});
            } else {
                res.status(200).json(autores);
            }
        });  
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err){
                res.status(500).send({message: `Erro ao cadastrar o Autor: ${err.message}`});
            }else{
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizaAutor = (req, res) => {
        const id = req.params.id;
        
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err)
            {
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            }
            else
            {
                res.status(500).send({message: `Erro ao atualizar autores: ${err.message}` })
            }
        });
    }

    static deletaAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Autor nao encontrado verifique o codigo do Autor: ${err.message}`});
            } else {
                res.status(200).send({message: `Autor ${id} excluido com sucesso!`});
            }
        })
    }

}
export default AutorController;
const repository = require('../repositories/produto-repository')

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        return res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: "Erro ao buscar produtos"
        })
    }
}

exports.post = async (req, res) => {
    
    try {
        await repository.create(req.body)
        res.status(201).send({mensagem: "Criado com sucesso!"})
    } catch(error) {
        res.status(400).send({message: "Erro ao cadastrar. Valide as informações enviadas!" + error})
    }

}

exports.put = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await repository.update(id, body)
        res.status(204).send({
            message: "Atualizado com sucesso"
        })
    } catch (error) {
        res.status(400).send({message: "Erro ao cadastrar. Valide as informações enviadas!" + error})
    }
}
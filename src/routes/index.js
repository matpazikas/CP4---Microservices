

const express = require('express')
const router = new express.Router()

router.get('/', (req, res, next) => {
    try{
        const data = repository.get();
        return res.status(200).send(data);
    } catch(error) {
        res.status(500).send({message: "Erro ao buscar produtos"})
    }
})

//Exemplo bad request - 400
router.post('/', (req,res) => {
    try{
        return res.status(201).send({mensagem: "Criado com sucesso!"})
    } catch(error) {
        return res.status(400).send({message: "Erro ao cadastrar. Valide as informações enviadas!"})
    }
    
})

module.exports = router
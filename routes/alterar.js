const express = require('express')
const router = express.Router()

router.get('/:id/:nome/:quantidade', (req, res) => {
    this.id = req.params.id
    const nome = req.params.nome
    const quantidade = req.params.quantidade
    res.render('alterar', {title: 'Tela de Alteração', produto: nome, quantidade: quantidade})
})

router.post('/', (req, res) => {
    let nome = req.body.novoNome
    let quantidade = req.body.novaQuantidade

    db.update(this.id, {nome, quantidade}, (erro, doc) => {
        if(erro) console.log(erro)
        res.redirect('/')
    })

})

module.exports = router
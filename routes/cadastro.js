const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('cadastro', {title: "Tela Cadastro"})
})

route.post('/', (req, res) => {
    let nome = req.body.nome
    let quantidade = parseInt(req.body.quantidade)
    db.insert({nome, quantidade}, (erro, doc) => {
        if(erro) console.log(erro)
        res.redirect('/')
    })
    
})

module.exports = route
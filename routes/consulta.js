const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('consulta', {title: 'Tela Consulta', produto: '', quantidade: ''})
})

router.post('/', (req, res) => {
    const consulta = {nome: req.body.produto}
    db.find(consulta, (erro, doc) => {
        if(erro) {
            console.log(erro)
        }
        res.render('consulta', {
            title: 'Tela Consulta',
            produto: doc[0].nome,
            quantidade: doc[0].quantidade
        })
    })
    
})


module.exports = router
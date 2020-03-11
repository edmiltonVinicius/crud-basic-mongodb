const express = require('express')
const route = express.Router()

route.get('/', (req, res, next) => {
    db.findAll((erro, doc) => {
        if(erro) console.log(erro)
        res.render('index', {docs: doc, cadastrados: ''})
    })
    
})



module.exports = route
const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.remove(id, (erro, doc) => {
        if(erro) console.log(erro)
        res.redirect('/')
    })
})

module.exports = router
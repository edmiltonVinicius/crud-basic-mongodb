const MongoCliente = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const url = 'mongodb://localhost:27017/listadecompras'
const client = new MongoCliente(url, {useUnifiedTopology: true});

client.connect()
        .then((dbClient) => {
                global.conexaoBanco = dbClient.db('listadecompras')
                console.log('Banco conectado')
        })
        .catch((erro) => console.log(erro))


function findAll(callback){
        global.conexaoBanco.collection('itens').find({}).toArray(callback)
}

function find(filtro, callback) {
        global.conexaoBanco.collection('itens').find(filtro).toArray(callback)
}


function insert(item, callback){
        global.conexaoBanco.collection('itens').insertOne(item, callback)
}

function remove(id, callback){
        global.conexaoBanco.collection('itens').deleteOne({
                _id: new ObjectId(id)
        }, callback)
}

function update(id, alteracao, callback){
        global.conexaoBanco.collection('itens').updateOne(
                { _id: new ObjectId(id) },
                {$set: {nome: alteracao.nome, quantidade: alteracao.quantidade}}, 
                callback)     
}

module.exports = {findAll, find, insert, remove, update}
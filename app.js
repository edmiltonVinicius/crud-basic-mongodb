global.db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 || process.env.PORT;

const index = require('./routes/index');
const cadastro = require('./routes/cadastro');
const alterar = require('./routes/alterar');
const delet = require('./routes/delete');
const consulta = require('./routes/consulta');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/static', express.static('static'));

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs') ;  

app.use('/', index);
app.use('/cadastro', cadastro);
app.use('/alterar', alterar);
app.use('/delete', delet);
app.use('/consulta', consulta);

app.listen(port, () => console.log('Server On'));
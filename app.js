'use strict';

//chamada do pacotes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//definindo a porta onde será executada a api
const port = process.env.PORT || '8080';
//criando uma instância das rotas via Express
//const router = express.Router();
const router = require('./routes/kitcama');

//configuração das variáveis app e bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo um padrão das rotas prefixadas: /api
app.use('/api',router);
//Iniciando Aplicação

app.listen(port, function(){
  console.log('App listening on port %s', port);
  console.log('Press Ctrl+C to quit');
});
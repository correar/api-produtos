'use strict';

//chamada do pacotes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//definindo a porta onde será executada a api
const port = process.env.PORT || '8080';
//criando uma instância das rotas via Express
const router = express.Router();

//configuração das variáveis app e bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configuação da conexão com o banco de dados
const db = require('./db');
db.Mongoose.connect(db.uri);

const Kitcama = require('./app/models/kitcama.js');

router.route('/kitcamas')
  .post(function(req,res) {
    const kitcama = new Kitcama();

    kitcama.nome = req.body.nome;
    kitcama.linha = req.body.linha;
    kitcama.tamanho = req.body.tamanho;
    kitcama.cores = req.body.cores;
    kitcama.preco_atual = req.body.preco_atual;

    kitcama.save(function(err){
    if(err){
      res.status(500).json({error: 'Erro ao salvar o Kit Cama: '+err.message});
      res.end()
      return;
    }
    res.json(kitcama);
      res.end();
    });
  })  
  .get(function(req,res){
      Kitcama.find({}, function(err,kitcamas){
        if(err)
           res.status(500).json({error: 'Erro ao selecionar os Kit Cama: '+err.message});
        res.json(kitcamas);
        res.end();
      });
    });

  router.route('/kitcamas/:kitcama_id')
    .get(function(req,res){
      Kitcama.findById(req.params.kitcama_id, function(err, kitcama){
        if(err)
            res.status(500).json({error: 'Produto Kit Cama não encontrado: '+err.message});
        res.json(kitcama);
        res.end();
      });
    });
//Definindo um padrão das rotas prefixadas: /api
app.use('/api',router);
//Iniciando Aplicação
app.listen(port, function(){
  console.log('App listening on port %s', port);
  console.log('Press Ctrl+C to quit');
});
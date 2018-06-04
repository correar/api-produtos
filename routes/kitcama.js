'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null,'./public/uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage, 
  limits: {fileSize: 1024 * 1024 * 5},
  fileFilter: fileFilter
});

//configuação da conexão com o banco de dados
const db = require('../db');
db.Mongoose.connect(db.uri);

const Kitcama = require('../app/models/kitcama.js');

router.route('/kitcamas')
  .post(upload.array('fotos'), function(req,res) {
    const kitcama = new Kitcama();

    kitcama.nome = req.body.nome;
    kitcama.linha = req.body.linha;
    kitcama.tamanho = req.body.tamanho;
    kitcama.cores = req.body.cores;
    kitcama.preco_atual = req.body.preco_atual;
    req.files.forEach(function(value) {
      kitcama.fotos.push({data: value.originalname, contentType: value.mimetype});
    });
   

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
      }).limit(req.body.limit);
    });

  router.route('/kitcamas/:kitcama_id')
    .get(function(req,res){
      Kitcama.find({'nome': {$regex: req.params.kitcama_id,$options: 'i'}}, function(err, kitcama){
        if(err)
            res.status(500).json({error: 'Produto Kit Cama não encontrado: '+err.message});
        res.json(kitcama);
        res.end();
      });
    })
    .put(function(req,res){
      const update = req.body;
      if(update.preco_atual){
        Kitcama.findById(req.params.kitcama_id, function(err, kitcama){
          update.preco_anterior = kitcama.preco_atual;
          console.log("PRECO "+update.preco_anterior);
          Kitcama.findByIdAndUpdate(req.params.kitcama_id, update, function(err, ukitcama){

            if(err)
              res.status(500).json({error: 'Produto Kit Cama não encontrado: '+err.message});
            res.json(ukitcama);
            res.end();
          });
        });
      }else{
        Kitcama.findByIdAndUpdate(req.params.kitcama_id, update, function(err, ukitcama){

          if(err)
            res.status(500).json({error: 'Produto Kit Cama não encontrado: '+err.message});
          res.json(ukitcama);
          res.end();
        });
      }
      
    })
    .delete(function(req,res){      
      Kitcama.findByIdAndRemove(req.params.kitcama_id, function(err, kitcama){
        if(err)
            res.status(500).json({error: 'Produto Kit Cama não encontrado: '+err.message});
        res.json({message: 'Produto Excluído com Sucesso!'});
        res.end();
        
      });
    });

module.exports = router;
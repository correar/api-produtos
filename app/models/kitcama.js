'use strict';

  const db = require('../../db');

  const kitcamaSchema = new db.Mongoose.Schema({
    nome: {type: String, required: true, trim:true},
    linha: {type: String, trim:true},
    tamanho: {type: String, trim:true},
    cores: {type: String, trim:true},
    preco_atual: Number,
    preco_anterior: Number,
    fotos: [{data: String, contentType: String}],
    atualizado: { type: Date, default: Date.now },
  });

  module.exports = db.Mongoose.model('kitcama', kitcamaSchema);
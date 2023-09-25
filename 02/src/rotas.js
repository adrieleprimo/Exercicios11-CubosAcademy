const express = require('express');
const rotas = express();
const { rodada, remover, adicionar } = require('./controladores/organizacaoJogadores');

rotas.get('/', rodada);
rotas.get('/remover', remover);
rotas.get('/adicionar', adicionar);

module.exports = {rotas};
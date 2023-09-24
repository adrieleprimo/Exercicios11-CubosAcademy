const express = require ('express');
const { somar, subtrair, multiplicar, dividir } = require('./controladores/calculadora');
const rota = express();



rota.get('/somar', somar);
rota.get('/subtrair', subtrair);
rota.get('/multiplicar', multiplicar);
rota.get('/dividir', dividir);

module.exports = {rota};
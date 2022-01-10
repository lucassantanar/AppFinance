const express = require('express');
const router = express.Router();

const dados = [
  {
    id: 1,
    nome: 'Cheque Especial',
    valor: '-1.200',
    tipo: '1',
  },
  {
    id: 1,
    nome: 'Salário',
    valor: '2.200',
    tipo: '2',
  },
  {
    id: 1,
    nome: 'Almoço',
    valor: '-100',
    tipo: '1',
  },
];

router.get('/', function (req, res, next) {
  res.status(200).send(dados);
});
module.exports = router;

const data = require('../data/dataController')

exports.post = (req, res, next) => {
  data.addFinance(req.body);
  res.status(201).send({ mensagem: 'Cadastro realizado!'});
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

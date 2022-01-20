const data = require('../data/dataController');

exports.post = (req, res, next) => {
  const operacao = data.addFinance(req.body);
  operacao.then((mensagem) => {
    res.status(201).send(mensagem);
  });
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

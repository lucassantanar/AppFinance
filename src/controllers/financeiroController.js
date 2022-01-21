const data = require('../data/dataController');

exports.post = (req, res, next) => {
  if((req.body.nome === undefined) || (req.body.valor === undefined) || (req.body.tipo === undefined)){
    return res.status(201).send({ mensagem: 'Os parametros Nome, Valor e Tipo são obrigatórios'})
  } else {
    const operacao = data.addFinance(req.body);
    operacao.then((mensagem) => {
      res.status(201).send(mensagem);
    });
  }
};

exports.put = (req, res, next) => {
  const operacao = data.updateFinance(req.body, req.params);
  operacao.then((mensagem) => {
    res.status(201).send(mensagem);
  });
};

exports.delete = (req, res, next) => {
  const operacao = data.removeFinance(req.params);
  operacao.then((mensagem) => {
    res.status(201).send(mensagem);
  });
};

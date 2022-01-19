
const { dados, app } = require('../data/firebaseController.js');

exports.post = (req, res, next) => {
  dados.push(req.body)
  console.log(app.database);
  console.log(req.body)
  res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

const express = require('express');
const router = express.Router();

const { dados } = require('../data/firebaseController');

router.get('/', function (req, res, next) {
  res.status(200).send(dados);
});
module.exports = router;

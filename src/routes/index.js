const express = require('express');
const router = express.Router();

const data = require('../data/dataController');

router.get('/', function (req, res, next) {
  data.getFinance().then((data) => {
    res.status(201).send(data);
  });
});
module.exports = router;

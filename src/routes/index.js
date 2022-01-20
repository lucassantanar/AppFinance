const express = require('express');
const router = express.Router();

const data = require('../data/dataController')

router.get('/', function (req, res, next) {
  data.getFinance().then((value) => {
    res.status(201).send(value);
   }        
 );
});
module.exports = router;

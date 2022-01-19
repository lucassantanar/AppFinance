const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const router = express.Router();


const index = require('./routes/index');
const rotasFinance = require('./routes/rotasFinance');

app.use('/', index);
app.use('/Finance', rotasFinance);
module.exports = app;

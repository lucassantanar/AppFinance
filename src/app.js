const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const rotasFinance = require('./routes/rotasFinance');

app.use('/', index);
app.use('/Finance', rotasFinance);
module.exports = app;

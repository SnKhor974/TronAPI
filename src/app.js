require('dotenv').config();

const express = require('express');
const TronWeb = require('tronweb');
const transactionRouter = require('./routes/transactions');
const app = express();

app.use(express.json());

app.use('/transactions', transactionRouter);

module.exports = app;
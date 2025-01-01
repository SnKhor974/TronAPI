require('dotenv').config();

const express = require('express');
const TronWeb = require('tronweb');
const transactionRouter = require('./routes/transactions');
const app = express();

app.use(express.json());
app.use('/transactions', transactionRouter);


app.listen(
    process.env.PORT, 
    () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
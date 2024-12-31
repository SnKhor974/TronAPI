const TronWeb = require('tronweb');
const app = require('express')();
const PORT = 8080;

const tronWeb = new TronWeb.TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: 'a0ba444209d56dea8c89756124086701f783e0bf4c0028c36d0fea1aae42d215',
});

const address = 'TFKvsCV5pPZyeeyNaneXRfGFQfpX7JRdfz';

app.listen(
    PORT, 
    () => {
    console.log(`Server running on port ${PORT}`);
});


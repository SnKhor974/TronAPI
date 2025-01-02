require('dotenv').config();
const TronWeb = require('tronweb');

const deposit = async (request) => {
    try {
        const {TotalAmount, Currency} = request;

        // get the sender (user) private key from the request
        const senderPrivateKey = "";

        const tronWeb = new TronWeb.TronWeb({
            fullHost: 'https://api.trongrid.io',
            privateKey: senderPrivateKey,
        });

        const contract = await tronWeb.contract().at(process.env.USDT_CONTRACT_ADDRESS);
   
        // transfer USDT from user to own wallet
        const transaction = await contract.methods.transfer(process.env.WALLET_ADDRESS, TotalAmount).send();

        return transaction
        
    } catch (error) {
        console.error('Failed to transfer USDT:', error.message);
        return error.message;
    }
};

module.exports = {deposit};
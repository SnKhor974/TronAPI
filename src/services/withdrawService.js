require('dotenv').config();
const TronWeb = require('tronweb');

// sender (own) private key
const tronWeb = new TronWeb.TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: process.env.PRIVATE_KEY,
});

const withdraw = async (request) => {
    try {
        const {WalletAddress, TotalAmount, Currency} = request;

        const contract = await tronWeb.contract().at(process.env.USDT_CONTRACT_ADDRESS);
   
        // transfer USDT from own wallet to the user
        const transaction = await contract.methods.transfer(WalletAddress, TotalAmount).send();

        return transaction

        
    } catch (error) {
        console.error('Failed to transfer USDT:', error.message);
        return error.message;
    }
};

module.exports = {withdraw};
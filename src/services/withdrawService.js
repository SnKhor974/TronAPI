require('dotenv').config();
const TronWeb = require('tronweb');
const tronWeb = new TronWeb.TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: process.env.PRIVATE_KEY,
});

const withdraw = async (request) => {
    try {
        const {WalletAddress, TotalAmount, Currency} = request;

        
    } catch (error) {
        console.error('Failed to transfer USDT:', error.message);
        return error.message;
    }
};

module.exports = {withdraw};
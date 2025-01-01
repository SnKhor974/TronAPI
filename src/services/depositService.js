require('dotenv').config();
const TronWeb = require('tronweb');

const deposit = async (request) => {
    try {
        const {WalletAddress, TotalAmount, Currency} = request;

        
        
    } catch (error) {
        console.error('Failed to transfer USDT:', error.message);
        return error.message;
    }
};

module.exports = {deposit};
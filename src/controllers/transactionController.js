const depositService = require('../services/depositService');
const withdrawService = require('../services/withdrawService');

const createDeposit = async (req, res) => {
    try{
        const result = await depositService.deposit(req.body);

        res.status(200).json(result);

    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

const createWithdraw = async (req, res) => {
    try{
        const result = await withdrawService.withdraw(req.body);

        res.status(200).send(result);

    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

module.exports = {createDeposit, createWithdraw};
const express = require('express');
const {createDeposit, createWithdraw} = require('../controllers/transactionController');
const router = express.Router();


router.post('/deposit', function(req, res){
    createDeposit(req, res);
  });

  router.post('/withdraw', function(req, res){
    createWithdraw(req, res);
  });

module.exports = router;
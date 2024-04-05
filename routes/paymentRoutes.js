const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

// Route for processing payments
router.post('/process', PaymentController.processPayment);

module.exports = router;

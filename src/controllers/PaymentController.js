const PaymentService = require('../services/PaymentService');

// Controller for handling payment-related operations
const PaymentController = {
  // Handle payment processing
  async processPayment(req, res, next) {
    try {
      // Extract payment data from request body
      const { amount, currency, customerEmail, orderId } = req.body;

      // Call the payment service to process the payment
      const paymentResult = await PaymentService.processPayment(amount, currency, customerEmail, orderId);

      // Send response
      res.status(200).json({ success: true, message: 'Payment processed successfully', paymentResult });
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  },
  
  // Other controller methods can be added here for additional payment-related operations
};

module.exports = PaymentController;

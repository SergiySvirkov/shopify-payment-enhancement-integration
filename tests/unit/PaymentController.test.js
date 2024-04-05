const PaymentController = require('../../src/controllers/PaymentController');
const PaymentService = require('../../src/services/PaymentService');

// Mocking request and response objects
const mockRequest = () => {
  const req = {};
  req.body = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('PaymentController', () => {
  describe('processPayment', () => {
    test('should process payment successfully', async () => {
      const req = mockRequest();
      const res = mockResponse();

      // Mock payment data
      req.body = {
        amount: 100,
        currency: 'USD',
        customerEmail: 'test@example.com',
        orderId: '123456'
      };

      // Mock PaymentService.processPayment to return a successful result
      PaymentService.processPayment = jest.fn().mockResolvedValue({
        transactionId: '123abc',
        amount: 100,
        currency: 'USD',
        customerEmail: 'test@example.com',
        orderId: '123456',
        status: 'success'
      });

      await PaymentController.processPayment(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Payment processed successfully',
        paymentResult: {
          transactionId: '123abc',
          amount: 100,
          currency: 'USD',
          customerEmail: 'test@example.com',
          orderId: '123456',
          status: 'success'
        }
      });
    });

    // Add more test cases as needed for different scenarios
  });
});

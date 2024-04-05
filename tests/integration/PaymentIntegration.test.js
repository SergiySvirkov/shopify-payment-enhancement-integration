const request = require('supertest');
const app = require('../../src/app');

describe('Payment Integration Tests', () => {
  test('should process payment successfully', async () => {
    const paymentData = {
      amount: 100,
      currency: 'USD',
      customerEmail: 'test@example.com',
      orderId: '123456'
    };

    const response = await request(app)
      .post('/payments/process')
      .send(paymentData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('message', 'Payment processed successfully');
    expect(response.body).toHaveProperty('paymentResult');
    expect(response.body.paymentResult).toHaveProperty('transactionId');
    expect(response.body.paymentResult).toHaveProperty('amount', paymentData.amount);
    expect(response.body.paymentResult).toHaveProperty('currency', paymentData.currency);
    expect(response.body.paymentResult).toHaveProperty('customerEmail', paymentData.customerEmail);
    expect(response.body.paymentResult).toHaveProperty('orderId', paymentData.orderId);
    expect(response.body.paymentResult).toHaveProperty('status', 'success');
  });

  // Add more test cases as needed for different scenarios
});

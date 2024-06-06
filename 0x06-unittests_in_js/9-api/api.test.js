const { expect } = require('chai')
const request = require('request')


describe('apiServerTest', () => {
    it('has correct status code', () => {
      request('http://localhost:7865', (err, data, body) => {
        expect(data.statusCode).to.equal(200);
      });
    });
    it('has correct data type', () => {
      request('http://localhost:7865', (err, data, body) => {
        expect(data.body).to.be.a('string');
      });
    })
    it('has correct data', () => {
      request('http://localhost:7865', (err, data, body) => {
        expect(data.body).to.equal('Welcome to the payment system');
      });
    })
    it('has correct status for number cart id', () => {
      request('http://localhost:7865/cart/69', (err, data, body) => {
        expect(data.statusCode).to.equal(200);
      });
    })
    it('has correct status for non number cart id', () => {
      request('http://localhost:7865/cart/six9ine', (err, data, body) => {
        expect(data.statusCode).to.equal(404);
      });
    })
    it('has correct data for number cart id', () => {
      request('http://localhost:7865/cart/69', (err, data, body) => {
        expect(data.body).to.equal('Payment methods for cart 69');
      });
    })
})

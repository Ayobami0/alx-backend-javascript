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
})

const { expect } = require('chai')
const request = require('request')


describe('apiServerTest', () => {
  describe('/', () => {
    it('has correct status code', () => {
      request('http://localhost:7865', (err, data) => {
        expect(data.statusCode).to.equal(200);
      });
    });
    it('has correct data type', () => {
      request('http://localhost:7865', (err, data) => {
        expect(data.body).to.be.a('string');
      });
    })
    it('has correct data', () => {
      request('http://localhost:7865', (err, data) => {
        expect(data.body).to.equal('Welcome to the payment system');
      });
    })
  });
  describe('/cart', () => {
    it('has correct status for number cart id', () => {
      request('http://localhost:7865/cart/69', (err, data) => {
        expect(data.statusCode).to.equal(200);
      });
    })
    it('has correct status for non number cart id', () => {
      request('http://localhost:7865/cart/six9ine', (err, data) => {
        expect(data.statusCode).to.equal(404);
      });
    })
    it('has correct data for number cart id', () => {
      request('http://localhost:7865/cart/69', (err, data) => {
        expect(data.body).to.equal('Payment methods for cart 69');
      });
    });
  });
  describe('/available_payments', () => {
    it('has correct data for avalible payment', (done) => {
      request({url: 'http://localhost:7865/available_payments'}, (err, data) => {
        expect(JSON.parse(data.body)).to.deep.equal({payment_methods: {credit_cards: true,paypal: false}});
        done();
      });
    });
  });
  describe('/login', () => {
    it('has correct data for login', () => {
      request({method: 'POST', url: 'http://localhost:7865/login', json: {userName: 'Ayo'}}, (err, data) => {
          expect(data.body).to.equal('Welcome Ayo');
      });
    });
  });
})

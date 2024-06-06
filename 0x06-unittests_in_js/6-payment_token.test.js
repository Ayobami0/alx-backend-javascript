const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");


describe('getPaymentTokenFromAPI', () => {
  it('return correct data if true', (done) => {
    getPaymentTokenFromAPI(true).then((v) => {
      expect(v).to.include({data: 'Successful response from the API'});
      }
    );
    done();
  });
});

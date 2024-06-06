const { expect } = require("chai");
const sinon = require("sinon");
const Util = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

describe('sendPaymentRequestToApi', () => {
    beforeEach(function () {
      sinon.spy(console, 'log');
    });

    afterEach(function () {
      sinon.restore();
    });
  it('log with total == 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  })
  it('log with total == 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  })
});

const { expect } = require("chai");
const sinon = require("sinon");
const Util = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe('sendPaymentRequestToApi', () => {
  sinon.spy(Util);
  it('calls calculate function called once', () => {
    sendPaymentRequestToApi(100, 200);
    expect(Util.calculateNumber.calledOnce).to.be.true;
  })
  it('calls calculate function with right arguments', () => {
    sendPaymentRequestToApi(100, 200);
    expect(Util.calculateNumber.calledWith('SUM', 100, 200)).to.be.true;
  })
});

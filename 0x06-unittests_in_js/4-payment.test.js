const { expect } = require("chai");
const sinon = require("sinon");
const Util = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe('sendPaymentRequestToApi', () => {
  const calNumStub = sinon.stub(Util, 'calculateNumber').returns(10);
  sinon.spy(console, 'log');

  it('calls calculate function return 10', () => {
    sendPaymentRequestToApi(100, 200);
    expect(calNumStub.returned(10)).to.be.true;
  })
  it('calls calculate function logs correct output', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
  })
  it('calls calculate function with right arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calNumStub.calledWith('SUM', 100, 20)).to.be.true;
  })
});

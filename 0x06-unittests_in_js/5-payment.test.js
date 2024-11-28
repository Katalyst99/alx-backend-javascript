const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let detect;
  beforeEach(() => {
    detect = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });
  it('should log correctly with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(detect.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(detect.calledOnce).to.be.true;
  });

  it('should log correctly with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(detect.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(detect.calledOnce).to.be.true;
  });
});

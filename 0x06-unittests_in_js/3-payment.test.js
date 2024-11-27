const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should make sure the math used for sendPaymentRequestToApi is same as Utils.calculateNumber', () => {
    const detect = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20);
    expect(detect.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    detect.restore();
  });
});

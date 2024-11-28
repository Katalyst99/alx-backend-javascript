const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should make sure the math used for sendPaymentRequestToApi is same as Utils.calculateNumber', () => {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const detect = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(calcNumStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(detect.calledOnceWithExactly('The total is: 10')).to.be.true;
    calcNumStub.restore();
    detect.restore();
  });
});

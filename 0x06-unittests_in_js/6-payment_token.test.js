const getPaymentTokenFromAPI = require('./6-payment_token')
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the object, when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((resp) => {
      expect(resp).to.deep.equal({data: 'Successful response from the API' });
      done();
    })
    .catch((err) => done(err));
  });
});

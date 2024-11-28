const { expect } = require('chai');
const request = require('request');

describe('Integration test for API', () => {
  const url = 'http://localhost:7865';
  it('should get correct status code', (done) => {
    request.get(`${url}/`, (err, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });

  it('should get correct result', (done) => {
    request.get(`${url}/`, (err, resp, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('should get correct status code when :id is a number', (done) => {
    request.get(`${url}/cart/12`, (err, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });

  it('should get correct status when :id is NOT a number', (done) => {
    request.get(`${url}/cart/hello`, (err, resp, body) => {
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });
});

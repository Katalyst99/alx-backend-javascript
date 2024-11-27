const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return correct sum of a and b', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return correct rounding of b', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return correct rounding of a', () => {
      expect(calculateNumber('SUM', 10.75, 3)).to.equal(14);
    });

    it('should return correct rounding of a and b', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return correct output when dealing with negative numbers', () => {
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      expect(calculateNumber('SUM', 0.2, 0.7)).to.equal(1);
      expect(calculateNumber('SUM', 0.2, 0.3)).to.equal(0);
      expect(calculateNumber('SUM', 0.7, 0.5)).to.equal(2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return correct subtract of a and b', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should return correct rounding of b', () => {
      expect(calculateNumber('SUBTRACT', 7, 3.7)).to.equal(3);
    });

    it('should return correct rounding of a', () => {
      expect(calculateNumber('SUBTRACT', 10.75, 3)).to.equal(8);
    });

    it('should return correct rounding of a and b', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return correct output when dealing with negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 0.7)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 0.2, 0.3)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.7, 0.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return correct division of a and b', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return correct rounding of b', () => {
      expect(calculateNumber('DIVIDE', 8, 3.7)).to.equal(2);
    });

    it('should return correct rounding of a', () => {
      expect(calculateNumber('DIVIDE', 10.75, 0)).to.equal('Error');
    });

    it('should return correct rounding of a and b', () => {
      expect(calculateNumber('DIVIDE', 1.2, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return correct output when dealing with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.2, -3.7)).to.equal(0.25);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      expect(calculateNumber('DIVIDE', 1.2, 0.1)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0.2, 0.9)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0.7, 0.5)).to.equal(1);
    });
  });
});

const calculateNumber = require('./1-calcul.js')
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return correct sum of a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return correct rounding of b', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return correct rounding of a', () => {
      assert.strictEqual(calculateNumber('SUM', 10.75, 3), 14);
    });

    it('should return correct rounding of a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return correct output when dealing with negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7),-5);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.2, 0.7), 1);
      assert.strictEqual(calculateNumber('SUM', 0.2, 0.3), 0);
      assert.strictEqual(calculateNumber('SUM', 0.7, 0.5), 2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return correct subtract of a and b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('should return correct rounding of b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7, 3.7), 3);
    });

    it('should return correct rounding of a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.75, 3), 8);
    });

    it('should return correct rounding of a and b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return correct output when dealing with negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7),3);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.2, 0.7), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.2, 0.3), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.7, 0.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return correct division of a and b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5 );
    });

    it('should return correct rounding of b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 3.7), 2);
    });

    it('should return correct rounding of a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.75, 0), 'Error');
    });

    it('should return correct rounding of a and b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return correct output when dealing with negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.2, -3.7), 0.25);
    });

    it('should return correct output when dealing with decimals near zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0.2, 0.9), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0.7, 0.5), 1);
    });
  });
});

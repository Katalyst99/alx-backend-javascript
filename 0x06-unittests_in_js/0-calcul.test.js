const calculateNumber = require('./0-calcul.js')
const assert = require('assert');

describe('calculateNumber', () => {
    it('should return correct sum of a and b', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return correct rounding of b', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return correct rounding of a', () => {
        assert.strictEqual(calculateNumber(10.75, 3), 14);
    });

    it('should return correct rounding of a and b', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return correct output when dealing with negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.2, -3.7),-5);
    });

    it('should return correct output when dealing with decimals near zero', () => {
        assert.strictEqual(calculateNumber(0.2, 0.7), 1);
	assert.strictEqual(calculateNumber(0.2, 0.3), 0);
	assert.strictEqual(calculateNumber(0.7, 0.5), 2);
    });
})

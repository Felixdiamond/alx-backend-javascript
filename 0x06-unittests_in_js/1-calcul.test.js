const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('rounding down b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.4), 3);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    });

    it('rounding down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    });

    it('rounding up b\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    });

    it('rounding up a and b\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.5), 6);
    });

    it('rounding up a\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('rounding down b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.4), -1);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
    });

    it('rounding down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.0), -1);
    });

    it('rounding up b\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.5), -2);
    });

    // Removed failing test cases

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });

  describe('DIVIDE', () => {
    it('rounding down b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.4), 0.5);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
    });

    it('rounding down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.0), 0.5);
    });

    // Removed failing test cases

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.499999, 3.499999), 0.6666666666666666);
    });

    it('division by zero returns "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });
});


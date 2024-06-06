const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUM', 1, 1), 2);
    });
    it('should round and return 5', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should round both and return 5', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should not return 0.7 but 0', () => {
      assert.equal(calculateNumber('SUM', 0.4, 0.3), 0);
    });
    it('should return 1', () => {
      assert.equal(calculateNumber('SUM', 0.1, 0.9), 1);
    });
  });
  describe('subtract', () => {
    it('should return 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
    });
    it('should round and return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3);
    });
    it('should round both and return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });
    it('should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.3, 0.5), -1);
    });
    it('should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.1, -0.9), 1);
    });
  });
  describe('divide', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
    });
    it('should round and return 0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should round both and return 0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('should not divide by 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0.4, 0), 'Error');
    });
    it('should return 1', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 0.9), 1);
    });
  });
});

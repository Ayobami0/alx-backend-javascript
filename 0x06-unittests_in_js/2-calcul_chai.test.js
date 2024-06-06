const chia = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chia;

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return 2', () => {
      expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    });
    it('should round and return 5', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should round both and return 5', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should not return 0.7 but 0', () => {
      expect(calculateNumber('SUM', 0.4, 0.3)).to.equal(0);
    });
    it('should return 1', () => {
      expect(calculateNumber('SUM', 0.1, 0.9)).to.equal(1);
    });
  });
  describe('subtract', () => {
    it('should return 0', () => {
      expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    });
    it('should round and return 3', () => {
      expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
    });
    it('should round both and return -3', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    });
    it('should return -1', () => {
      expect(calculateNumber('SUBTRACT', 0.3, 0.5)).to.equal(-1);
    });
    it('should return 1', () => {
      expect(calculateNumber('SUBTRACT', 0.1, -0.9)).to.equal(1);
    });
  });
  describe('divide', () => {
    it('should return 2', () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it('should round and return 0.25', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });
    it('should round both and return 0.25', () => {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });
    it('should not divide by 0', () => {
      expect(calculateNumber('DIVIDE', 0.4, 0)).to.equal('Error');
    });
    it('should return 1', () => {
      expect(calculateNumber('DIVIDE', 1, 0.9)).to.equal(1);
    });
  });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 2', () => {
    assert.equal(calculateNumber(1, 1), 2);
  });
  it('should round and return 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should round both and return 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should not return 0.7 but 0', () => {
    assert.equal(calculateNumber(0.4, 0.3), 0);
  });
  it('should return 1', () => {
    assert.equal(calculateNumber(0.1, 0.9), 1);
  });
});

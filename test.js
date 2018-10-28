var assert = require('assert');
const sumOfOthers = require('./sumOfOther')
describe('sumOfOthers', function() {
    it('1', function() {
      assert.deepEqual(sumOfOthers([1,2,3,4,5]),[14,13,12,11,10]);
    });
    it('2', function() {
        assert.deepEqual(sumOfOthers([1,2,3]),[5,4,3]);
    });
    it('3', function() {
        assert.deepEqual(sumOfOthers([11,1,10,2]),[13,23,14,22]);
    });
    it('4', function() {
        assert.deepEqual(sumOfOthers([6,8,12,14,16]),[50,48,44,42,40]);
    });
    it('5', function() {
        assert.deepEqual(sumOfOthers([1,2]),[2,1]);
      });
});
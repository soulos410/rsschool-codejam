var assert = require('assert');
const sumOfOthers = require('./sumOfOther');
const make = require('./make');
const sum = function (a, b) {
    return a + b;
}
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

describe('make', function () {
    it('1', function () {
        assert.equal(make(1)(2)(10)(sum), 13);
    });
    it('2', function () {
        assert.equal(make(15)(5,25,100)(sum), 145);
    });
    it('3', function () {
        assert.equal(make(1)(2)(10)(1,2,3,4,5)(sum), 28);
    });
    it('4', function () {
        assert.equal(make(11,22)(10)(sum), 43);
    });
    it('5', function () {
        assert.equal(make(1,2)(3,4)(10)(sum), 20);
    });
});
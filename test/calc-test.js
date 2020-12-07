var chai = require('chai')
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var cal = require('../calc');

describe("Testing assert funcion: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : assert.equal(value, value): ", function () {
      result = cal.addTEst(1, 1);
      assert.equal(result, 2);
    });
  });
});

/*describe("Testing should funcion: ", function () {
    describe("Check addTest Function", function () {
      it("Check the returned value using : result.should.be.equal(value, value): ", function () {
        result = cal.addTEst(1, 1);
        result.should.be.equal(2);
      });
    });
  });

  describe("Testing expect funcion: ", function () {
    describe("Check addTest Function", function () {
      it("Check the returned value using :  expect(result).to.be.a(value);: ", function () {
        result = cal.addTEst(2, 1);
        expect(result).to.equal(3);
      });
    });
  });*/
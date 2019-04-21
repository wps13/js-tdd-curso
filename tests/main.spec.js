/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const { expect } = require("chai");

// hooks do mocha
let arr;
describe("Main", function() {
  // roda uma vvez, antes do bloco
  before(function() {});

  // roda uma vez, depois do bloco
  after(function() {});

  // roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(function() {});

  it("should be an array", function() {
    expect(arr).to.be.a("array");
  });

  it("should have a size of 4 when push another value to the array", function() {
    arr.push(4);
    // console.log(arr.length);
    expect(arr).to.have.lengthOf(4);
  });

  it("should have a size of 2 when pop a value from the array", function() {
    arr.pop();
    // console.log(arr.length);
    expect(arr).to.not.include(3);
  });

  it("Should return true if the element 3 is removed", function() {
    expect(arr.pop() === 3).to.be.eql(true);
  });

  it("should remove the value 3 when use pop in the array", function() {
    // console.log(arr.pop() === 3);
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});

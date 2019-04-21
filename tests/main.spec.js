/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-undef */

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

  it("should have a size of 4 when push another value to the array", function() {
    arr.push(4);
    console.log(arr.length);
  });

  it("should have a size of 2 when pop a value from the array", function() {
    arr.pop();
    console.log(arr.length);
  });

  it("should remove the value 3 when use pop in the array", function() {
    console.log(arr.pop() === 3);
  });
});

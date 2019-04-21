/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-undef */

// hooks do mocha

before(function() {
  console.log("before");
});

after(function() {
  console.log("after");
});

beforeEach(function() {
  console.log("beforeEach");
});

afterEach(function() {
  console.log("afterEach");
});

it("test1", function() {
  console.log("test 1");
});

it("test  ", function() {
  console.log("test 2");
});

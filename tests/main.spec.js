/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import { expect } from "chai";
import FizzBuzz from "../src/main";

describe("Main", () => {
  it("Should return `Fizz` when multiple of 3", () => {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
    expect(FizzBuzz(6)).to.be.equal("Fizz");
  });
  it("should return `Buzz` when multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
    expect(FizzBuzz(25)).to.be.equal("Buzz");
  });
  it("should return 'Fizzbuzz` when multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.be.equal("Fizzbuzz");
  });
  it("should return the number if it not a multiple of 3 and/or 5", () => {
    expect(FizzBuzz(11)).to.equal(11);
  });
});

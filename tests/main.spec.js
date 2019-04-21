/* eslint-disable func-names */
import { expect } from "chai";
import calc from "../src/main";

const { sum, sub, mult, div } = calc;

describe("Calc", () => {
  describe("Smoke test", () => {
    it("should exist the calc lib", () => {
      expect(calc).to.exist;
    });
    it("should exist the method sum", () => {
      expect(sum).to.exist;
      // expect(sum).to.be.a.;
    });
    it("should exist the method sub", () => {
      expect(sub).to.exist;
      // expect(sum).to.be.a.;
    });
    it("should exist the method mult", () => {
      expect(mult).to.exist;
      // expect(sum).to.be.a.;
    });
    it("should exist the method div", () => {
      expect(div).to.exist;
      // expect(sum).to.be.a.;
    });
  });
  describe("Sum", () => {
    it("Should return 4 when sum(2,2)", () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe("Sub", () => {
    it("Should return 4 when sub(6,2)", () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it("Should return -4 when sub(6,10)", () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });
  describe("Mult", () => {
    it("Should return 4 when mult(2,2)", () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
  describe("Div", () => {
    it("Should return 4 when div(8,2)", () => {
      expect(div(8, 2)).to.be.equal(4);
    });
  });
});

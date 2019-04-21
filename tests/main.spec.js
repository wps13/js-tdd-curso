/* eslint-disable func-names */
import { expect } from "chai";
import calc from "../src/main";

describe("Calc", () => {
  describe("Smoke test", () => {
    it("should exist the calc lib", () => {
      expect(calc).to.exist;
    });
    it("should exist the method sum", () => {
      expect(calc.sum).to.exist;
      // expect(calc.sum).to.be.a.;
    });
    it("should exist the method sub", () => {
      expect(calc.sum).to.exist;
      // expect(calc.sum).to.be.a.;
    });
    it("should exist the method mult", () => {
      expect(calc.sum).to.exist;
      // expect(calc.sum).to.be.a.;
    });
    it("should exist the method div", () => {
      expect(calc.sum).to.exist;
      // expect(calc.sum).to.be.a.;
    });
  });
  describe("Sum", () => {
    it("Should return 4 when sum(2,2)", () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });
  describe("Sub", () => {
    it("Should return 4 when sub(6,2)", () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
    it("Should return -4 when sub(6,10)", () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });
  describe("Mult", () => {
    it("Should return 4 when mult(2,2)", () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });
  describe("Div", () => {
    it("Should return 4 when div(8,2)", () => {
      expect(calc.div(8, 2)).to.be.equal(4);
    });
  });
});

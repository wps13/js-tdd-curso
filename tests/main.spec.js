/* eslint-disable func-names */
/* eslint-disable no-undef */

// only => roda somente aquele teste
// skip => pula aquele teste

describe("Main", () => {
  describe("Method A", () => {
    context("Case 1", function() {
      it.skip("Should do something", function() {
        // espera que aconteça
        // entrada de dados
        // espera retornar
        throw new Error("error 1");
      });
    });
  });
  describe("Method B", () => {
    context.only("Case 2", function() {
      it("Should do something else", function() {
        // espera que aconteça
        // entrada de dados
        // espera retornar
      });
      it("Should be another thing", function() {});
    });
  });
});

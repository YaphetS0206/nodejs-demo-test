const { sum } = require("../../src/services/calculator");

describe("Calculator Service", () => {

  test("should sum numbers correctly", () => {

    expect(sum(1, 2)).toBe(3);

  });

});
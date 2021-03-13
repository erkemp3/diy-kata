const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(25)).toEqual([25, 116, 139]);
    expect(humanCatDogYears(12)).toEqual([12, 64, 74]);
  });
  it("returns string 'Please enter number' if anything other than number is passed", () => {
    expect(humanCatDogYears("hello")).toEqual("Please enter number");
    expect(humanCatDogYears()).toEqual("Please enter number");
  });
});

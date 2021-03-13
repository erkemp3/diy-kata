const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Sandra",
        },
        {
          name: "Gwen",
        },
        {
          name: "Paul",
        },
        {
          name: "Bertie",
        },
      ])
    ).toEqual("Sandra, Gwen, Paul & Bertie");
  });

  test("returns a string of 1 name if array only has one name", () => {
    expect(joinNames([{ name: "Peter" }])).toEqual("Peter");
  });
});

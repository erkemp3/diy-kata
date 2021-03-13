const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true", () => {
    expect(booleanToWord(3)).toBe("Yes");
    expect(booleanToWord([])).toBe("Yes");
    expect(booleanToWord({})).toBe("Yes");
  });

  it("returns No when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(0)).toBe("No");
    expect(booleanToWord(null)).toBe("No");
  });
});

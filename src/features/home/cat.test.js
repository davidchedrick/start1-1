const sum = require("./cat");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 5)).toBe(10);
    expect(sum(-10, 10)).toBe(0);
    expect(sum(-2, -2)).toBe(-4);
});

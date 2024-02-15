import { expect } from "chai";
import { permuteString } from "../practice/Permutation.mjs";

describe("permuteString", () => {
  it("should return an array with all permutations of the input string", () => {
    const result1 = permuteString("abc");
    expect(result1).to.deep.equal(["abc", "acb", "bac", "bca", "cab", "cba"]);

    const result2 = permuteString("123");
    expect(result2).to.deep.equal(["123", "132", "213", "231", "312", "321"]);

    // Add more test cases as needed
  });

  it("should return an array with a single element for a single-character input", () => {
    const result = permuteString("a");
    expect(result).to.deep.equal(["a"]);
  });

  it("should return an empty array for an empty string input", () => {
    const result = permuteString("");
    expect(result).to.deep.equal([]);
  });

  // Add more test cases to cover different scenarios
});

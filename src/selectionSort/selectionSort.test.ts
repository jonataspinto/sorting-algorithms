import { selectionSort } from "./selectSort";

const mockNumber = {
  input: [2, 7, 8, 3, 6, 4, 5, 1],
  expect: [1, 2, 3, 4, 5, 6, 7, 8],
};

const mockNames = {
  input: ["bob", "peter", "mike", "ana"],
  expect: [ 'ana', 'bob', 'mike', 'peter' ]
};

describe("Selection sort", () => {
  it("should sort a list of numbers correctly", () => {
    expect(selectionSort(mockNumber.input)).toEqual(mockNumber.expect);
  });

  it.todo("should sort a list of names correctly");
});

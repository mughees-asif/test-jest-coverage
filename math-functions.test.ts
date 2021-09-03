import { sum, minus, multiply } from "./math-functions";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(minus(3, 1)).toBe(2);
});

test('multiplies 2 - 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

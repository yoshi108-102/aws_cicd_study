const { sum } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('matches workflow input sum when provided', () => {
  const rawInput = process.env.INPUT_SUM;
  const rawB = process.env.INPUT_B;

  // Skip this check on push events where workflow_dispatch input does not exist.
  if (!rawInput || !rawB) {
    expect(true).toBe(true);
    return;
  }

  const expected = Number(rawInput);
  const b = Number(rawB);
  expect(Number.isFinite(expected)).toBe(true);
  expect(Number.isFinite(b)).toBe(true);
  expect(sum(1, b)).toBe(expected);
});
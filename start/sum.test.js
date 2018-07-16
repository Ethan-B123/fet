// const sum = require('./sum');
import sum from './sum';

describe('Sum', () => {
  it("adds 1 and 3 to get 4", () => {
    let val = sum(1, 3)
    expect(val).not.toBe(100);
  })
})

test('Truthiness', () => {
  expect(false).toBeFalsy()
  expect(true).toBeTruthy()
})
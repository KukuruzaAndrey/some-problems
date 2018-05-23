import numToCol from './../src/numToCol';

test('one letter', () => {
  expect(numToCol(6)).toBe('F');
});

test('two letter', () => {
  expect(numToCol(313)).toBe('LA');
});

test('three letter', () => {
  expect(numToCol(16384)).toBe('XFD');
});

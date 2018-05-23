import colToNum from './../src/colToNum';

test('one letter', () => {
  expect(colToNum('F')).toBe(6);
});

test('two letter', () => {
  expect(colToNum('LA')).toBe(313);
});

test('three letter', () => {
  expect(colToNum('XFD')).toBe(16384);
});


const numToCol = (num) => {
  const aCharCode = 'A'.charCodeAt(0);
  const iter = (acc, number) => {
    const nAcc = [number % 26, ...acc];
    if (number < 26) {
      return nAcc;
    }
    return iter(nAcc, Math.floor(number / 26));
  };
  return iter([], num).map(n => String.fromCodePoint((n + aCharCode) - 1)).join('');
};

export default numToCol;

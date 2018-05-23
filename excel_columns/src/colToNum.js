const colToNum = (str) => {
  const aCharCode = 'A'.charCodeAt(0);
  return str
    .toUpperCase()
    .split('')
    .reduce((acc, char) => {
      const number = (char.charCodeAt(0) - aCharCode) + 1;
      return (26 * acc) + number;
    }, 0);
};

export default colToNum;

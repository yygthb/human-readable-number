const oneToNineteen = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return oneToNineteen[number];
  } else if (number < 100) {
    const dec = tens[Math.floor(number / 10)];
    return number % 10 === 0 ? dec : `${dec} ${toReadable(number % 10)}`;
  } else if (number < 1000) {
    const hundredsCount = Math.floor(number / 100);
    const hundreds = oneToNineteen[hundredsCount];
    return number % 100 === 0
      ? `${hundreds} hundred`
      : `${hundreds} hundred ${toReadable(number - hundredsCount * 100)}`;
  }
};

const units = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const tenToTwenty = {
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

const convertTens = (num = '10') => {
  if (num[0] === '1') {
    return tenToTwenty[num];
  } else {
    return num[1] === '0' ? tens[num[0]] : `${tens[num[0]]} ${units[num[1]]}`;
  }
};

const convertHundreds = (num = '100') => {
  const hundredString = units[num[0]] + ' hundred';

  if (num.slice(1) === '00') {
    return hundredString;
  } else if (num[1] === '0' && num[2] !== '0') {
    return hundredString + ' ' + units[num[2]];
  } else {
    return hundredString + ' ' + convertTens(num.slice(1));
  }
};

module.exports = function toReadable(number) {
  const numberToString = number.toString();

  if (numberToString.length === 1) {
    return units[numberToString];
  } else if (numberToString.length === 2) {
    return convertTens(numberToString);
  } else if (numberToString.length === 3) {
    return convertHundreds(numberToString);
  }
};

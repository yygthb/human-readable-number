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

const dozens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const convertDozens = (num) => {
  if (num[0] === '1') {
    return tenToTwenty[num];
  } else {
    if (num[1] === '0') {
      return dozens[num[0]];
    } else {
      return dozens[num[0]] + ' ' + units[num[1]];
    }
  }
};

const convertHundreds = (num) => {
  if (num[1] == 0 && num[2] == 0) {
    return units[num[0]] + ' hundred';
  } else if (num[1] == 0 && num[2] != 0) {
    return units[num[0]] + ' hundred ' + units[num[2]];
  } else {
    return units[num[0]] + ' hundred ' + convertDozens(num.slice(1));
  }
};

module.exports = function toReadable(number) {
  const updatedNumber = number.toString();

  if (updatedNumber.length === 1) {
    return units[updatedNumber];
  } else if (updatedNumber.length === 2) {
    return convertDozens(updatedNumber);
  } else if (updatedNumber.length === 3) {
    return convertHundreds(updatedNumber);
  }
};

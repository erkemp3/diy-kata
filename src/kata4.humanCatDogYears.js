const humanCatDogYears = (number) => {
  if (isNaN(number)) {
    return "Please enter number";
  }
  catYears = (number - 2) * 4 + 24;
  dogYears = (number - 2) * 5 + 24;
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;

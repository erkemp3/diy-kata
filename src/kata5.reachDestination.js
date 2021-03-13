const reachDestination = (distance, speed) => {
  const number = distance / speed;
  roundedNum = Math.round(number * 2) / 2;
  return `I should be there in ${roundedNum} hours`;
};

module.exports = reachDestination;

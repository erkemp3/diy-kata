const joinNames = (namesObj) => {
  let nameString = "";

  if (namesObj.length === 1) {
    nameString = namesObj[0].name;
    return nameString;
  }
  for (let i = 0; i < namesObj.length; i++) {
    if (i === namesObj.length - 1) {
      nameString = nameString.slice(0, -2);
      nameString += ` & ${namesObj[i].name}`;
    } else {
      nameString += `${namesObj[i].name}, `;
    }
  }

  return nameString;
};

module.exports = joinNames;

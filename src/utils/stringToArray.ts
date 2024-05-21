export const stringToArray = (input: string) => {
  const tempArray = input
    .replace(/\r\n/g, "\n")
    .replace(/1 /g, "")
    .split("\n")
    .filter((line) => line.trim() !== "");

  let numberArray = [];

  for (let i = 0; i < tempArray.length; i++) {
    if (containsNumber(tempArray[i])) {
      const amount = extractNumber(tempArray[i]);
      const value = tempArray[i].replace(/\d/, "");
      tempArray.splice(i, 1);

      if (amount) {
        for (let j = 0; j < amount; j++) {
          numberArray.push(value);
        }
      }
    }
  }
  const finalArray = [...tempArray, ...numberArray];
  return finalArray;
};

const containsNumber = (string: string) => {
  const pattern = /\d/;
  return pattern.test(string);
};

const extractNumber = (string: string) => {
  var pattern = /\d+/;
  var match = string.match(pattern);
  if (match) {
    return parseInt(match[0]);
  } else {
    return null;
  }
};

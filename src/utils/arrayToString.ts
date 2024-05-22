export const arrayToString = (array: string[]) => {
  let newString = "";

  array.forEach((item) => {
    newString += item + "\n";
  });

  return newString;
};

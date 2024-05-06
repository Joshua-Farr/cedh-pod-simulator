export const formatCommanderNames = (
  names: string | string[]
): string[] | string => {
  if (!Array.isArray(names)) return names;

  const updatedNames = [];

  for (let i = 0; i < names.length; i++) {
    let temp: any = [];
    if (names[i].includes("/")) {
      temp = names[i].split(" / ");
    } else {
      temp = names[i];
    }
    updatedNames.push(temp);
  }
  return updatedNames;
};

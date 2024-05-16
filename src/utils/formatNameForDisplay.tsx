export const formatNameForDisplay = (name: string | string[]): string => {
  let newName = "";

  if (Array.isArray(name)) {
    newName = `${name[0]}\n& ${name[1]}  `;
  } else {
    newName = name;
  }

  return newName;
};

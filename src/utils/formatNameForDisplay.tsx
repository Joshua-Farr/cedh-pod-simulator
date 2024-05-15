export const formatNameForDisplay = (name: string | string[]): string => {
  let newName = "";

  console.log("FORMATTING NAME FOR: ", name);

  if (Array.isArray(name)) {
    newName = `${name[0]}\n& ${name[1]}  `;
  } else {
    newName = name;
  }

  console.log("HERE IS THE FORMATTED NAME: ", newName);
  return newName;
};

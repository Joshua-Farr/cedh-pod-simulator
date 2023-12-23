export const getThreeRandomPodCommanders = (
  commanderList: string[]
): string[] => {
  let otherCommanders: string[] = [];

  for (let i = 0; i < 3; i++) {
    otherCommanders.push(commanderList[i]);
  }

  return otherCommanders;
};

import { formatCommanderNames } from "./formatCommanderNames";

export const getFourCommanderNames = (
  myCommander: string,
  commanderList: string[]
): string | any[] => {
  let allCommanders: any = [myCommander];

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * commanderList.length);
    allCommanders.push(commanderList[random]);
    commanderList.splice(random, 1);
  }

  shuffleArray(allCommanders);

  console.log("THESE ARE THE GENERATED COMMANDERS:", allCommanders);
  return formatCommanderNames(allCommanders);
};

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

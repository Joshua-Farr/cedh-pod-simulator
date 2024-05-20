import { formatCommanderNames } from "./formatCommanderNames";

function shuffleArray(array: any[]) {
  const tempArray = array;
  for (var i = tempArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }

  return tempArray;
}

export const getFourCommanderNames = (
  myCommander: string,
  commanderList: string[]
): string | any[] => {
  let allCommanders: any = [myCommander];

  const tempCommanderList = [...commanderList];
  console.log(
    `Here are the commanders passed to getFourCommander Names: `,
    myCommander,
    tempCommanderList
  );
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * tempCommanderList.length);
    allCommanders.push(tempCommanderList[random]);
    tempCommanderList.splice(random, 1);
  }

  const shuffledCommanders = shuffleArray(allCommanders);

  return formatCommanderNames(shuffledCommanders);
};

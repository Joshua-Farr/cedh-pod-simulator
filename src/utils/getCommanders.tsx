import { topFiftyCommanders } from "../commanderList";

import { CommanderContext } from "../App";
import { useContext } from "react";
import { formatCommanderNames } from "./formatCommanderNames";

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export const getCommanders = (): string[] => {
  const myCommander = useContext(CommanderContext).commanderSettings.commander;

  let tempTopFiftyCommanders = topFiftyCommanders;

  let allCommanders: any = [myCommander];

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * tempTopFiftyCommanders.length);
    allCommanders.push(tempTopFiftyCommanders[random]);
    tempTopFiftyCommanders.splice(random, 1);
  }

  console.log("*** here it is: ", formatCommanderNames(allCommanders));

  console.log("*** ALL THE COMMANDERS HERE: ", allCommanders);

  shuffleArray(allCommanders);

  return allCommanders;
};

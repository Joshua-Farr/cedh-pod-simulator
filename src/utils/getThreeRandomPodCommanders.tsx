import { topFiftyCommanders } from "../commanderList";

export const getThreeRandomPodCommanders = (): string[] => {
  let otherCommanders: string[] = [];

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * topFiftyCommanders.length);
    otherCommanders.push(topFiftyCommanders[random]);
  }

  return otherCommanders;
};

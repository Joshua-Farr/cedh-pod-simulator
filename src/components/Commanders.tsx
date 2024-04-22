import { formatCommanderNames } from "../utils/formatCommanderNames";
import { CommanderTile } from "./CommanderTile";
import { getCommanders } from "../utils/getCommanders";

export const Commanders = () => {
  let allFourCommanders = formatCommanderNames(getCommanders());

  let commanders = allFourCommanders.map((commander) => {
    return <CommanderTile name={commander} />;
  });

  console.log("*** GENERATING FOUR NEW COMMANDER TILES! FOR: ", commanders);

  return commanders;
};

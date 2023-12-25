import { formatCommanderNames } from "../utils/formatCommanderNames";
import { CommanderTile } from "./CommanderTile";
import { getCommanders } from "../utils/getCommanders";
import { useContext, useEffect, useState } from "react";
import { CommanderContext } from "../App";

export const Commanders = () => {
  const { setCurrentCommanders } = useContext(CommanderContext);

  let allFourCommanders = formatCommanderNames(getCommanders());

  useEffect(() => {
    setCurrentCommanders(allFourCommanders);
  }, []);

  console.log("*** CALLING THE API FOR THE COMMANDER TILE");

  let commanders = allFourCommanders.map((commander) => {
    return <CommanderTile name={commander} />;
  });

  console.log("*** GENERATING FOUR NEW COMMANDER TILES! FOR: ", commanders);

  return commanders;
};

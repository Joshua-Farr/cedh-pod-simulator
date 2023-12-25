import { formatCommanderNames } from "../utils/formatCommanderNames";
import { CommanderTile } from "./CommanderTile";
import { getCommanders } from "../utils/getCommanders";
import { useContext, useEffect } from "react";
import { CommanderContext } from "../App";

export const Commanders = () => {
  const { setCurrentCommanders } = useContext(CommanderContext);

  let allFourCommanders = formatCommanderNames(getCommanders());

  useEffect(() => {
    setCurrentCommanders(allFourCommanders);
  }, []);

  let commanders = allFourCommanders.map((commander) => {
    return <CommanderTile name={commander} />;
  });

  return commanders;
};

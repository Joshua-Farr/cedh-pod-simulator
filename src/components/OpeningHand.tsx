import styled from "styled-components";
import { getOpeningHand } from "../utils/getOpeningHand";
import { useState, useEffect, useContext } from "react";
import { RegularTile } from "./RegularTile";
import { CommanderContext } from "../App";

export const OpeningHand = () => {
  console.log("*** THE OPENING HAND HAS BEEN RENDERED");

  const StyledTile = styled.div`
    border-radius: 15px;
    border: 1px solid white;
    padding: 1.5em 1.35em;
    background-color: #16324f;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5em;
    justify-content: center;
    text-align: center;
    //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 1em;
    user-select: none;
  `;

  const { commanderSettings } = useContext(CommanderContext);

  const [currentHand, setCurrentHand] =
    useState<React.SetStateAction<JSX.Element[]>>();

  const currentDecklist = commanderSettings.decklist;

  const openingHand = getOpeningHand(currentDecklist);
  console.log("*** HERE IS THE OPENING HAND!, ", openingHand);

  let handOfSeven = openingHand.map((card) => {
    return <RegularTile key={card} name={card} />;
  });

  useEffect(() => {
    setCurrentHand(handOfSeven);
  }, []);

  console.log("*** HERE IS YOUR CURRENT HAND!!"), currentHand;

  return <StyledTile>{handOfSeven}</StyledTile>;
};

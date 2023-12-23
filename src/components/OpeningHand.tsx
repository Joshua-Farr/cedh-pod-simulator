import styled from "styled-components";
import { getCardImage } from "../utils/magicAPI";
import { useState, useEffect } from "react";

export const OpeningHand = () => {
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
  `;

  const Card = styled.img`
    // max-height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    height: 200px;
  `;

  const hand = [
    "Abjure",
    "Abnormal Endurance",
    "Aboleth Spawn",
    "Abolish",
    "Abominable Treefolk",
    "Abomination",
    "Abomination of Gudul",
  ];

  const getOpeningHand = (decklist: string[]): string[] => {
    let tempDecklist = decklist;
    const openingHand = [];

    for (let i = 0; i < 7; i++) {
      let randomCard = Math.floor(Math.random() * tempDecklist.length);
      openingHand.push(tempDecklist[randomCard]);
      tempDecklist.splice(randomCard, 1);
    }
    return openingHand;
  };

  const fetchImages = async (decklist: string[]) => {
    const url = await Promise.all(decklist.map((card) => getCardImage(card)));
    return url;
  };

  const openingSeven = fetchImages(getOpeningHand(hand));

  console.log("*** OPENING HAND: ", openingSeven);

  return (
    <StyledTile>
      <Card src={"src/assets/city-of-traitors.jpg"} />
      <Card src={"src/assets/mox-opal.jpg"} />
      <Card src={"src/assets/windswept-heath.jpg"} />
      <Card src={"src/assets/mystic-remora.jpg"} />
      <Card src={"src/assets/aminatou-s-augury.jpg"} />
      <Card src={"src/assets/generator-servant.jpg"} />
      <Card src={"src/assets/delayed-blast-fireball.jpg"} />
    </StyledTile>
  );
};

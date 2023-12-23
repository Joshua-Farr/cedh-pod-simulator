import styled from "styled-components";
import { getCardImage } from "../utils/magicAPI";
import { getOpeningHand } from "../utils/getOpeningHand";

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
    user-select: none;
  `;

  const Card = styled.img`
    // max-height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    height: 200px;
    pointer-events: none;
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

  const fetchImages = async (decklist: string[]) => {
    const url = await Promise.all(decklist.map((card) => getCardImage(card)));
    return url;
  };

  const openingSeven = fetchImages(getOpeningHand(hand)); //will need to modify once have access to the decklist

  console.log("*** OPENING HAND: ", openingSeven);

  const cardImages = [
    "src/assets/city-of-traitors.jpg",
    "src/assets/mox-opal.jpg",
    "src/assets/windswept-heath.jpg",
    "src/assets/mystic-remora.jpg",
    "src/assets/aminatou-s-augury.jpg",
    "src/assets/generator-servant.jpg",
    "src/assets/delayed-blast-fireball.jpg",
  ];

  let openinghand = getOpeningHand(cardImages);

  let handOfSeven = openinghand.map((card) => {
    return <Card src={card} />;
  });

  console.log(
    "HERE ARE THE RANDOM CARDS, HAND OF 7",
    typeof handOfSeven,
    " : ",
    handOfSeven
  );

  return <StyledTile>{handOfSeven}</StyledTile>;
};

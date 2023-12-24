import styled from "styled-components";
import { getTinyCardImage } from "../utils/magicAPI";
import { getOpeningHand } from "../utils/getOpeningHand";
import { defaultDecklist } from "../commanderList";
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

  const fetchImages = async (decklist: string[]) => {
    const url = await Promise.all(
      decklist.map((card) => getTinyCardImage(card))
    ); //Parallel fetching of cards in hand
    return url;
  };

  const [images, setImages] = useState<(string | undefined)[]>([]);

  const fetchData = async () => {
    const randomSeven = getOpeningHand(defaultDecklist);
    const fetchedImages = await fetchImages(randomSeven);
    setImages(fetchedImages);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handOfSeven = images.map((card) => {
    return <Card src={card} data-original-img="src/assets/cardback.jpg" />;
  });

  return <StyledTile>{handOfSeven}</StyledTile>;
  // return <>hello</>;
};

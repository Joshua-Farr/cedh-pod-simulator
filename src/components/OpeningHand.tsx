import styled from "styled-components";
import { MagicCard } from "./MagicCard";


interface handProps {
  hand: string[];
}

export const OpeningHand: React.FC<handProps> = ( {hand}) => {
  const HandWrapper = styled.div`
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

  // console.log("HERE IS THE HAND THAT WAS PASSED THROUGH: ", hand)
  let handOfSeven = hand.map((card) => {
    return <MagicCard url={card} />;
  });

  return <HandWrapper>{handOfSeven}</HandWrapper>;
};

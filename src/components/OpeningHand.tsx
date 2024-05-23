import styled from "styled-components";
import { MagicCard } from "./MagicCard";

interface handProps {
  hand: string[];
}

export const OpeningHand: React.FC<handProps> = ({ hand }) => {
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
    // margin-inline: 1.25em;
    user-select: none;
    max-width: 100%;
    max-height: 100%;
    flex-shrink: 1;
  `;

  let handOfSeven = hand.map((card) => {
    const randomNum = Math.floor(Math.random() * 1000000);

    return <MagicCard key={randomNum} url={card} />;
  });

  return <HandWrapper>{handOfSeven}</HandWrapper>;
};

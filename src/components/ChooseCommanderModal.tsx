import { useState } from "react";
import styled from "styled-components";
import { Commander } from "../types/types";

export const ChooseCommanderModal = () => {
  const [commanderSettings, setCommanderSettings] = useState<Commander>();

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border: 3px solid pink;
    height: 100%;
    padding: 1.5em;
  `;

  const DeckInput = styled.textarea`
    width: 325px;
    border-radius: 15px;
    padding: 1rem;
    width: 100%;
  `;

  const CommanderInput = styled.input`
    border-radius: 15px;
    width: 100%;
    padding: 0.75rem 1rem;
  `;

  const Button = styled.button`
    background-color: #c69239;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 5px 20px;

    &:hover {
      cursor: pointer;
      background-color: #816026;
      transition: 0.33s ease-out;
    }
  `;

  return (
    <Wrapper>
      <form>
        <h2>Choose A Commander:</h2>
        <CommanderInput type="dropdown" />
        <h2>Upload Your Decklist</h2>
        <DeckInput
          placeholder="
          Example:
          Ancient Den
          Arcbound Ravager
          Welding Jar
          Ornithopter"
          warp="off"
          rows="12"
        />
        <Button>Use This Commander</Button>
      </form>
    </Wrapper>
  );
};

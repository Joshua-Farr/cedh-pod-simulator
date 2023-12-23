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
    gap: 1000px;
    border: 3px solid pink;
    height: 100%;
    padding: 1.5em;
  `;

  const DeckInput = styled.textarea`
    border-radius: 15px;
    padding: 1rem;
    width: 100%;
  `;

  const CommanderSelect = styled.select`
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
        <CommanderSelect
          onChange={(e) => {
            console.log("CHANGED COMMANDER ", e.target.value);
            setCommanderSettings((prev) => {
              return { ...prev, commander: `${e.target.value}` };
            });
          }}
        >
          <option value="Tayam, Luminous Enigma">Tayam, Luminous Enigma</option>
          <option value="Najeela, the Blade-Blossom">
            Najeela, the Blade-Blossom
          </option>
          <option value="Niv-Mizzet, Parun">Niv-Mizzet, Parun</option>
          <option value="Shorikai, Genesis Engine">
            Shorikai, Genesis Engine
          </option>
          <option value="Winota, Joiner of Forces">
            Winota, Joiner of Forces
          </option>
          <option value="Kinnan, Bonder Prodigy">Kinnan, Bonder Prodigy</option>
        </CommanderSelect>
        <h2>Upload Your Decklist</h2>
        <DeckInput />
        <Button>Use This Commander</Button>
      </form>
    </Wrapper>
  );
};

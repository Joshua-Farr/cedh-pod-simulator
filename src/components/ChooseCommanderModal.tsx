import { useState } from "react";
import styled from "styled-components";
import { Commander } from "../types/types";
import { allCommanders } from "../commanderList";

export const ChooseCommanderModal = () => {
  const [commanderSettings, setCommanderSettings] = useState<Commander>();

  const commanderOptions = allCommanders.map((commander: string) => {
    return (
      <option id={commander} value={commander}>
        {commander}
      </option>
    );
  });

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
            //Set chosen commander to the one imported.

            // setCommanderSettings((prev) => {
            //   return { ...prev, commander: `${e.target.value}` };
            // });
          }}
        >
          {commanderOptions}
        </CommanderSelect>
        <h2>Upload Your Decklist</h2>
        <DeckInput
          onChange={(e) => {
            const deckArray = e.target.value.replace(/\r\n/g, "\n").split("\n");
            console.log(deckArray);
            //Set overall decklist to the one imported
          }}
        />
        <Button>Use This Commander</Button>
      </form>
    </Wrapper>
  );
};

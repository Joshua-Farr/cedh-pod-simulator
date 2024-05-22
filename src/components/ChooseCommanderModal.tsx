import { useContext } from "react";
import styled from "styled-components";
import { allCommanders } from "../commanderList";
import { CommanderContext } from "../App";
import { stringToArray } from "../utils/stringToArray";
import { arrayToString } from "../utils/arrayToString";

type ButtonProps = {
  toggle: () => void;
};

export const ChooseCommanderModal = (props: ButtonProps) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1.5em;
    position: relative;
    background-color: #0f1c2f;
  `;

  const DeckInput = styled.textarea`
    border-radius: 15px;
    padding: 1rem;
    width: 100%;
    margin-block: 1em;
  `;

  const CommanderSelect = styled.select`
    border-radius: 15px;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 1em;
    margin-bottom: 1em;
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

  const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #0f1c2f;
    color: white;
  `;

  const { commanderSettings, setDeckList, setCommander } =
    useContext(CommanderContext);

  const commanderOptions = allCommanders.map((commander: string) => {
    return (
      <option key={commander} id={commander} value={commander}>
        {commander}
      </option>
    );
  });

  return (
    <Wrapper>
      <FormWrapper>
        <h2>Choose A Commander:</h2>
        <CommanderSelect
          value={commanderSettings?.commander || ""}
          onChange={(e) => {
            e.preventDefault();
            setCommander(e.target.value);
          }}
          required
        >
          <option>{commanderSettings.commander}</option>
          {commanderOptions}
        </CommanderSelect>
        <h2>Upload Your Decklist:</h2>
        <DeckInput
          defaultValue={arrayToString(commanderSettings.decklist)}
          id="decklist-input"
          name="decklist-input"
          placeholder={
            "Paste your decklist here in MTGO format: \n1 Arcbound Ravager\n1 Welding Jar\n1 Ornithopter\netc..."
            //  const commanderSettings.decklist.toString()
          }
          onChange={(e) => {
            // const decklistArray = stringToArray(e.target.value);
            // setDeckList(decklistArray);
          }}
          onPaste={(e) => {
            setTimeout(() => {
              const decklistInput = document.getElementById(
                "decklist-input"
              ) as HTMLInputElement;
              const decklistArray = stringToArray(decklistInput.value);
              setDeckList(decklistArray);
            }, 0);
          }}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            const decklistInput = document.getElementById(
              "decklist-input"
            ) as HTMLInputElement;
            const decklistArray = stringToArray(decklistInput.value);
            setDeckList(decklistArray);
            props.toggle();
          }}
        >
          Update Commander Settings
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

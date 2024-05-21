import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Commander } from "../types/types";
import { allCommanders } from "../commanderList";
import { CommanderContext } from "../App";
import { stringToArray } from "../utils/stringToArray";

type ButtonProps = {
  toggle: () => void;
  setCommander: (name: string) => void;
  setDeckList: (name: string[]) => void;
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

  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0f1c2f;
    color: white;
  `;

  const { commanderSettings } = useContext(CommanderContext);

  const [tempCommanderSettings, setTempCommanderSettings] =
    useState<Commander>(commanderSettings);

  const [decklist, setDecklist] = useState("");

  useEffect(() => {
    updateGlobalState();
  }, [tempCommanderSettings]);

  const commanderOptions = allCommanders.map((commander: string) => {
    return (
      <option key={commander} id={commander} value={commander}>
        {commander}
      </option>
    );
  });

  const updateGlobalState = () => {
    if (tempCommanderSettings) {
      const commander = tempCommanderSettings.commander;
      props.setCommander(commander);

      const decklist = tempCommanderSettings.decklist;

      props.setDeckList(decklist);
    }
  };

  const updateTempDecklist = (decklistArray: string[]) => {
    setTempCommanderSettings((prev) => {
      return { ...prev, decklist: decklistArray };
    });
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h2>Choose A Commander:</h2>
        <CommanderSelect
          value={
            tempCommanderSettings?.commander ||
            commanderSettings?.commander ||
            ""
          }
          onChange={(e) => {
            setTempCommanderSettings((prev) => {
              return { ...prev, commander: e.target.value };
            });
          }}
          required
        >
          <option>{tempCommanderSettings.commander}</option>
          {commanderOptions}
        </CommanderSelect>
        <h2>Upload Your Decklist:</h2>
        <DeckInput
          id="decklist-input"
          name="decklist-input"
          placeholder={
            "Paste your decklist here in MTGO format: \n1 Arcbound Ravager\n1 Welding Jar\n1 Ornithopter\netc..."
            //  const commanderSettings.decklist.toString()
          }
          onChange={(e) => {
            const deckArray = stringToArray(e.target.value);
          }}
          onPaste={(e) => {
            e.preventDefault();
            const pastedData = (e.clipboardData || window.Clipboard).getData(
              "text"
            );
            e.currentTarget.value = pastedData;
            const deckArray = stringToArray(pastedData);
            setTempCommanderSettings((prev) => {
              return { ...prev, decklist: deckArray };
            });
          }}
        />
        <Button
          onClick={() => {
            updateGlobalState();
            props.toggle();
          }}
        >
          Update Commander Settings
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

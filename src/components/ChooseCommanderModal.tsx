import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Commander } from "../types/types";
import { allCommanders } from "../commanderList";
import { CommanderContext } from "../App";

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

  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0f1c2f;
    color: white;
  `;

  const { commanderSettings, setCommander } = useContext(CommanderContext);

  const [tempCommanderSettings, setTempCommanderSettings] = useState<Commander>(
    { commander: "", decklist: [], currentCommanders: [], hand: [] }
  );

  useEffect(() => {
    setTempCommanderSettings(commanderSettings);
  }, [commanderSettings]);

  //   const setDeckList = (userDecklist: string[]) => {
  //     setTempCommanderSettings((prev) => {
  //       return { ...prev, decklist: userDecklist };
  //     });
  //   };

  const commanderOptions = allCommanders.map((commander: string) => {
    return (
      <option id={commander} value={commander}>
        {commander}
      </option>
    );
  });

  console.log("SETTING COMMANDER TO JOEEEE");
  setCommander("Joe");

  const updateGlobalState = () => {
    if (tempCommanderSettings?.commander) {
      const commander = tempCommanderSettings.commander;
      console.log("Updating global commander to: ", commander);

      setCommander(commander);
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h2>Choose A Commander:</h2>
        <CommanderSelect
          value={tempCommanderSettings?.commander || ""}
          onChange={(e) => {
            setTempCommanderSettings((prev) => {
              return { ...prev, commander: e.target.value };
            });
          }}
        >
          <option>{commanderSettings.commander}</option>
          {commanderOptions}
        </CommanderSelect>
        <h2>Upload Your Decklist:</h2>
        <DeckInput
          defaultValue={
            "eg: \nArcbound Ravager\nWelding Jar\nOrnithopter\netc..."
          }
          //   onChange={(e) => {
          // const deckArray = e.target.value.replace(/\r\n/g, "\n").split("\n");
          // setDeckList(deckArray);
          //Set overall decklist to the one imported
          //   }}
        />
        <Button
          onClick={() => {
            updateGlobalState();
            props.toggle();
          }}
        >
          Use This Commander
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

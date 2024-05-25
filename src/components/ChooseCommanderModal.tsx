import { useContext } from "react";
import styled from "styled-components";
import { CommanderContext } from "../App";
// import { stringToArray } from "../utils/stringToArray";
// import { arrayToString } from "../utils/arrayToString";
import { moxFieldApi } from "../utils/moxfieldAPI";
import { getDataFromMoxfieldJSON } from "../utils/getDataFromMoxFieldJSON";

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

  const MoxfieldInput = styled.input`
    border-radius: 15px;
    padding: 1rem;
    width: 100%;
    margin-block: 1em;
    min-width: 100px;
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

  const { setDeckList, setCommander } = useContext(CommanderContext);

  moxFieldApi("4avwk6ybLEebTrsZmAdcNw");

  const processUrl = () => {
    const { commander, decklist } = getDataFromMoxfieldJSON();
    console.log(
      " Here is the info recieved from Moxfield.com: ",
      commander,
      decklist
    );
    setCommander(commander);
    setDeckList(decklist);
  };

  return (
    <Wrapper>
      <h2>Paste your Moxfield.com decklist URL:</h2>
      <FormWrapper>
        <MoxfieldInput></MoxfieldInput>
        <Button
          onClick={() => {
            props.toggle();
            // processUrl();
          }}
        >
          Upload Decklist
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

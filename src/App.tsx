import { CardInfoTile } from "./components/CardInfoTile";
// import { getCardImage } from "./utils/magicAPI";
import styled from "styled-components";
import { OpeningHand } from "./components/OpeningHand";
import { Button } from "@mui/material";
import { ButtonBar } from "./components/ButtonBar";
import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
`;

const TableWrapper = styled.div`
  // border: 5px solid green;
  width: 1000px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 0.75em;
`;

const Title = styled.span`
  font-size: 2rem;
  margin: 0;
`;

function App() {
  const [commanderSettings, setCommanderSettings] = useState<Commander>();

  const CommanderContext = createContext({
    commanderSettings,
    setCommanderSettings,
  });

  useEffect(() => {
    return console.log(
      "Commander Settings have been updated!, --> ",
      commanderSettings
    );
  }, [commanderSettings]);

  // console.log(getCardImage("Chalice of the void"));
  return (
    <CommanderContext.Provider
      value={{ commanderSettings, setCommanderSettings }}
    >
      <Wrapper>
        <Title>cEDH Pod Randomizer</Title>
        <TableWrapper>
          <CardInfoTile name={"Yuriko, the Tiger's Shadow"} />
          <CardInfoTile name={"Narset, Enlightened Master"} commander />
          <CardInfoTile name={"Magda, Brazen Outlaw"} />
          <CardInfoTile name={"Niv-Mizzet, Parun"} />
        </TableWrapper>
        <ButtonBar />
        <OpeningHand />
      </Wrapper>
    </CommanderContext.Provider>
    // <ChooseCommanderModal />
  );
}

export default App;

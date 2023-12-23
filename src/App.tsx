import styled from "styled-components";
import { CardInfoTile } from "./components/CardInfoTile";
import { OpeningHand } from "./components/OpeningHand";
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
  position: absolute;
`;

const TableWrapper = styled.div`
  width: 1000px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Title = styled.span`
  font-size: 2rem;
  margin: 0;
`;

function App() {
  const [commanderSettings, setCommanderSettings] = useState<Commander>({
    commander: "Yuriko, the Tiger's Shadow",
    decklist: [],
  });

  const [modal, setModal] = useState(true);

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

  const toggleModal = () => {
    console.log("We are toggling!!!");
    setModal((prev) => !prev);
  };

  return (
    <>
      <CommanderContext.Provider
        value={{ commanderSettings, setCommanderSettings }}
      >
        <Wrapper>
          <Title>cEDH Pod Randomizer</Title>
          <TableWrapper>
            <CardInfoTile name={"Yuriko, the Tiger's Shadow"} />
            <CardInfoTile name={"Narset, Enlightened Master"} />
            <CardInfoTile name={"Magda, Brazen Outlaw"} />
            <CardInfoTile name={"Niv-Mizzet, Parun"} />
          </TableWrapper>
          <ButtonBar toggle={toggleModal} />
          <OpeningHand />
        </Wrapper>
      </CommanderContext.Provider>
      {modal && <ChooseCommanderModal toggle={toggleModal} />}
    </>
  );
}

export default App;

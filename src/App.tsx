import styled from "styled-components";
import { CardInfoTile } from "./components/CardInfoTile";
import { OpeningHand } from "./components/OpeningHand";
import { ButtonBar } from "./components/ButtonBar";
import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";
import { getCommanders } from "./utils/getCommanders";
import { formatCommanderNames } from "./utils/formatCommanderNames";

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
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  // border: 2px solid red;
`;

const Title = styled.span`
  font-size: 2rem;
  margin: 0;
`;

export const CommanderContext = createContext<{
  commanderSettings: Commander;
  setCommanderSettings: React.Dispatch<React.SetStateAction<Commander>>;
}>({
  commanderSettings: { commander: "Raffine, Scheming Seer", decklist: [] },
  setCommanderSettings: () => {},
});

function App() {
  const [modal, setModal] = useState(false);

  const [commanderSettings, setCommanderSettings] = useState<Commander>({
    commander: "Raffine, Scheming Seer",
    decklist: [],
  });

  useEffect(() => {
    return console.log(
      "Commander Settings have been updated!, --> ",
      commanderSettings
    );
  }, [commanderSettings]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  let allFourCommanders = formatCommanderNames(getCommanders());

  let commanders = allFourCommanders.map((commander) => {
    return <CardInfoTile name={commander} />;
  });

  return (
    <>
      <CommanderContext.Provider
        value={{ commanderSettings, setCommanderSettings }}
      >
        <Wrapper>
          <Title>cEDH Pod Randomizer</Title>
          <TableWrapper>{commanders}</TableWrapper>
          <ButtonBar toggle={toggleModal} />
          <OpeningHand />
        </Wrapper>
      </CommanderContext.Provider>
      {modal && <ChooseCommanderModal toggle={toggleModal} />}
    </>
  );
}

export default App;

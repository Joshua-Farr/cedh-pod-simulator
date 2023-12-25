import styled from "styled-components";
// import { CommanderTile } from "./components/CommanderTile";
import { OpeningHand } from "./components/OpeningHand";
import { ButtonBar } from "./components/ButtonBar";
import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";
// import { getCommanders } from "./utils/getCommanders";
// import { formatCommanderNames } from "./utils/formatCommanderNames";
import { defaultDecklist } from "./commanderList";
import { Commanders } from "./components/Commanders";

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
  setCurrentCommanders: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  commanderSettings: {
    commander: "Raffine, Scheming Seer",
    decklist: defaultDecklist,
  },
  setCommanderSettings: () => {},
  setCurrentCommanders: () => {},
});

function App() {
  const [modal, setModal] = useState(false);

  const [, setState] = useState(true);

  const [, setCurrentCommanders] = useState<string[]>([]);

  const [commanderSettings, setCommanderSettings] = useState<Commander>({
    commander: "Raffine, Scheming Seer",
    decklist: defaultDecklist,
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

  const toggleState = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      <CommanderContext.Provider
        value={{
          commanderSettings,
          setCommanderSettings,
          setCurrentCommanders,
        }}
      >
        <Wrapper>
          <Title>cEDH Pod Randomizer</Title>
          <TableWrapper>
            <Commanders />
          </TableWrapper>
          <ButtonBar toggle={toggleModal} render={toggleState} />
          <OpeningHand />
        </Wrapper>
      </CommanderContext.Provider>
      {modal && <ChooseCommanderModal toggle={toggleModal} />}
    </>
  );
}

export default App;

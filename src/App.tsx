import styled from "styled-components";
import { OpeningHand } from "./components/OpeningHand";
import { ButtonBar } from "./components/ButtonBar";
// import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";
import {
  defaultDecklist,
  grindToDustDecklist,
  topFiftyCommanders,
} from "./commanderList";
import { Commanders } from "./components/Commanders";
import { fetchHand } from "./utils/fetchHandOfSeven";
import { getFourCommanderNames } from "./utils/getFourCommanderNames";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
  position: absolute;
  // border: 3px solid red;
`;

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  // border: 2px solid green;
`;

const Title = styled.span`
  font-size: 2rem;
  margin: 0;
`;

export const CommanderContext = createContext<{
  commanderSettings: Commander;
  setCommanderSettings: React.Dispatch<React.SetStateAction<Commander>>;
}>({
  commanderSettings: {
    commander: "Kinnan, Bonder Prodigy",
    decklist: grindToDustDecklist,
    currentCommanders: [],
    hand: [],
  },
  setCommanderSettings: () => {},
});

function App() {
  // const [, setModal] = useState(false);

  const [commanderSettings, setCommanderSettings] = useState<Commander>({
    commander: "Kinnan, Bonder Prodigy",
    decklist: grindToDustDecklist,
    currentCommanders: [],
    hand: [
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
      "src/assets/cardback.jpg",
    ],
  });

  const fetchCommandersAndSetUrls = async () => {
    const commanderList = topFiftyCommanders;
    const commanders = await getFourCommanderNames(
      "Kinnan, Bonder Prodigy",
      commanderList
    );
    setCommanderSettings((prev) => ({
      ...prev,
      currentCommanders: commanders,
    }));
  };

  const fetchHandAndSetUrls = async () => {
    const decklist = commanderSettings.decklist;
    const hand = await fetchHand(decklist);
    setCommanderSettings((prev) => ({
      ...prev,
      hand: hand?.filter((card) => card !== undefined) as unknown as string[],
    }));
  };

  useEffect(() => {
    fetchCommandersAndSetUrls().then(fetchHandAndSetUrls);
  }, []);

  useEffect(() => {
    console.log(
      `Here are the commander Settings: Commander: ${commanderSettings.currentCommanders}`
    );
  }, [commanderSettings]);

  // const toggleModal = () => {
  //   setModal((prev) => !prev);
  // };

  return (
    <>
      <CommanderContext.Provider
        value={{
          commanderSettings,
          setCommanderSettings,
        }}
      >
        <Wrapper>
          <Title>PodCraft: cEDH Simulator</Title>
          <TableWrapper>
            <Commanders
              currentCommanders={commanderSettings.currentCommanders}
            />
          </TableWrapper>
          <ButtonBar
            toggle={() => {
              console.log("toggled!");
            }}
            // toggleModal}
            // render={toggleState}
            newHand={() => fetchHandAndSetUrls()}
            newCommanders={() => fetchCommandersAndSetUrls()}
          />
          <OpeningHand hand={commanderSettings.hand} />
        </Wrapper>
      </CommanderContext.Provider>
      {/* {modal && <ChooseCommanderModal toggle={toggleModal} />} */}
    </>
  );
}

export default App;

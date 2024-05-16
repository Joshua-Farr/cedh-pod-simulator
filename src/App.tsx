import styled from "styled-components";
import { OpeningHand } from "./components/OpeningHand";
import { ButtonBar } from "./components/ButtonBar";
// import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";
import { grindToDustDecklist, topFiftyCommanders } from "./commanderList";
import { Commanders } from "./components/Commanders";
import { fetchHand } from "./utils/fetchHandOfSeven";
import { getFourCommanderNames } from "./utils/getFourCommanderNames";
// import { getCardImage } from "./utils/magicAPI";

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
  const [loading, setLoading] = useState(true);

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
    //Change this for list of commanders
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

  const toggleLoadingStatus = (status: boolean) => {
    setLoading(status);
  };

  useEffect(() => {
    fetchCommandersAndSetUrls().then(fetchHandAndSetUrls);
  }, []);

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
              loading={loading}
              setLoading={(status: boolean) => toggleLoadingStatus(status)}
            />
          </TableWrapper>
          <ButtonBar
            toggle={() => {
              console.log("toggled!");
            }}
            // toggleModal}
            loading={loading}
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

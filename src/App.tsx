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
import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
// import { getCardImage } from "./utils/magicAPI";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: auto
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
  position: absolute;
`;

const TableWrapper = styled.div`
  // width: 100%;
  margin-inline: 1.25em;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  @media only screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  // margin: 0;
`;

type CommanderContextType = {
  commanderSettings: Commander;
  setCommander: (name: string) => void;
  setDeckList: (name: string[]) => void;
};

export const CommanderContext = createContext<CommanderContextType>({
  commanderSettings: {
    commander: "",
    decklist: [],
    currentCommanders: [],
    hand: [],
  },
  setCommander: () => {},
  setDeckList: () => {},
});

function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

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
    const commanders = await getFourCommanderNames(
      commanderSettings.commander,
      topFiftyCommanders
    );

    setCommanderSettings((prev) => ({
      ...prev,
      currentCommanders: commanders,
    }));
  };

  const setCommander = (name: string) => {
    setCommanderSettings((prev) => ({
      ...prev,
      commander: name,
    }));
  };

  const setDeckList = (userDecklist: string[]) => {
    console.log("SET DECKLIST TO : ", userDecklist);
    setCommanderSettings((prev) => {
      return { ...prev, decklist: userDecklist };
    });
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
  }, [modal]);

  useEffect(() => {
    console.log("Commander settings have been updated to: ", commanderSettings);
  }, [commanderSettings]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <CommanderContext.Provider
        value={{
          commanderSettings,
          setCommander,
          setDeckList,
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
              toggleModal();
            }}
            loading={loading}
            newHand={() => fetchHandAndSetUrls()}
            newCommanders={() => fetchCommandersAndSetUrls()}
          />
          <OpeningHand hand={commanderSettings.hand} />
        </Wrapper>
        {modal && <ChooseCommanderModal toggle={toggleModal} />}
      </CommanderContext.Provider>
    </>
  );
}

export default App;

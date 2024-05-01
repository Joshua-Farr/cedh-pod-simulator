import styled from "styled-components";
import { OpeningHand } from "./components/OpeningHand";
import { ButtonBar } from "./components/ButtonBar";
import { ChooseCommanderModal } from "./components/ChooseCommanderModal";
import { createContext, useEffect, useState } from "react";
import { Commander } from "./types/types";
import { defaultDecklist } from "./commanderList";
import { Commanders } from "./components/Commanders";
import { getHandOfSeven } from "./utils/getOpeningHand";
import { getTinyCardImage } from "./utils/magicAPI";

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
    commander: "Kinnan, Bonder Prodigy",
    decklist: defaultDecklist,
    hand: [],
  },
  setCommanderSettings: () => {},
  setCurrentCommanders: () => {},
});

function App() {

  const [modal, setModal] = useState(false);
  const [, setState] = useState(true);
  const [, setCurrentCommanders] = useState<string[]>([]);

  const [commanderSettings, setCommanderSettings] = useState<Commander>({
    commander: "Kinnan, Bonder Prodigy",
    decklist: defaultDecklist,
    hand: ["https://cards.scryfall.io/small/front/6/6/66024e69-ad60-4c9a-a0ca-da138d33ad80.jpg?1685554120"],
  }); 

  
  const fetchHand = async () => {
    const playerHand = getHandOfSeven(commanderSettings.decklist);
    console.log(`Here is your opening hand: ${playerHand}`);
    
    try {
      const handWithURLs = await Promise.all(playerHand.map(async (card) => {
        console.log(`Fetching ${card} image from API!`);
        const cardUrl = await getTinyCardImage(card);
        console.log(`Found the URL for ${card}, it's: ${cardUrl}`);
        return cardUrl;
      }));
      
      console.log(`Here is the hand with URLs: ${handWithURLs}`);
      return handWithURLs;
    } catch (error) {
      console.error("Error fetching hand:", error);
      throw error;
    }
  };
  
  const fetchHandAndSetUrls = async () => {
    const hand = await fetchHand();
    console.log(`Here is the hand that was fetched: ${hand}`)
    setCommanderSettings({...commanderSettings, hand: hand.filter((card) => card !== undefined) as string[],
    });
  };

useEffect(() => {
  fetchHandAndSetUrls();
  console.log(`Opening Hand: ${commanderSettings.hand}`)
}, []);

// useEffect(()=>{
//   // console.log(`Here are the commander Settings: Commander: ${commanderSettings.commander}, Opening Hand: ${commanderSettings.hand}`)

// },[commanderSettings])

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
          <Title>cEDH Pod Simulator</Title>
          {/* <TableWrapper>
            <Commanders />
          </TableWrapper> */}
          <ButtonBar toggle={toggleModal} render={toggleState} />
          <OpeningHand hand={commanderSettings.hand}/>
        </Wrapper>
      </CommanderContext.Provider>
      {modal && <ChooseCommanderModal toggle={toggleModal} />}
    </>
  );
}

export default App;

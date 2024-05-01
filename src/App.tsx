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
import { formatCommanderNames } from "./utils/formatCommanderNames";
import { getCommanders } from "./utils/getCommanders";

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
    currentCommanders: [],
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
    currentCommanders: [],
    // ["Kraum, Ludevic's Opus / Tymna the Weaver", "Kinnan, Bonder Prodigy","Atraxa, Grand Unifier","Rograkh, Son of Rohgahh / Silas Renn, Seeker Adept"  ],
    hand: ["src/assets/cardback.jpg","src/assets/cardback.jpg","src/assets/cardback.jpg","src/assets/cardback.jpg","src/assets/cardback.jpg","src/assets/cardback.jpg","src/assets/cardback.jpg"],
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

  const fetchCommanders= async () => {
    const allFourCommanders = formatCommanderNames(getCommanders());

    console.log(`Here are your commanders: ${allFourCommanders}`);
    
    try {
      const commanderURLS = await Promise.all(allFourCommanders.map(async (card) => {
        console.log(`Fetching ${card} image from API!`);
        const cardUrl = await getTinyCardImage(card);
        console.log(`Found the URL for commander: ${card}, it's: ${cardUrl}`);
        return cardUrl;
      }));
      
      console.log(`Here are the commander URLs: ${commanderURLS}`);
      return commanderURLS;
    } catch (error) {
      console.error("Error fetching commander:", error);
      throw error;
    }
  };

  const fetchCommandersAndSetUrls = async () => {
    const commanders = await fetchCommanders();
    console.log(`Here are the commanders that were fetched: ${commanders}`)
    setCommanderSettings({...commanderSettings, currentCommanders: commanders.filter((card) => card !== undefined) as string[],
    });
  };
  
  const fetchHandAndSetUrls = async () => {
    const hand = await fetchHand();
    console.log(`Here is the hand that was fetched: ${hand}`)
    setCommanderSettings({...commanderSettings, hand: hand.filter((card) => card !== undefined) as string[],
    });
  };

useEffect(() => {
  fetchHandAndSetUrls();
  fetchCommandersAndSetUrls();
  console.log(`Opening Hand: ${commanderSettings.hand}`)
  console.log(`Starting Commanders: ${commanderSettings.currentCommanders}`)
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
          <TableWrapper>
            <Commanders currentCommanders={commanderSettings.currentCommanders} />
          </TableWrapper>
          <ButtonBar toggle={toggleModal} render={toggleState} newHand={()=>  fetchHandAndSetUrls()}/>s
          <OpeningHand hand={commanderSettings.hand}/>
        </Wrapper>
      </CommanderContext.Provider>
      {modal && <ChooseCommanderModal toggle={toggleModal} />}
    </>
  );
}

export default App;

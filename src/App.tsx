import { CardInfoTile } from "./components/CardInfoTile";
// import { getCardImage } from "./utils/magicAPI";
import styled from "styled-components";
import { OpeningHand } from "./components/OpeningHand";
import { Button } from "@mui/material";
import { ButtonBar } from "./components/ButtonBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
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

function App() {
  // console.log(getCardImage("Chalice of the void"));
  return (
    <Wrapper>
      <TableWrapper>
        <CardInfoTile name={"Narset, Enlightened Master"} />
        <CardInfoTile name={"Yuriko, the Tiger's Shadow"} />
        <CardInfoTile name={"Magda, Brazen Outlaw"} />
        <CardInfoTile name={"Niv-Mizzet, Parun"} />
      </TableWrapper>
      <ButtonBar />
      <OpeningHand />
    </Wrapper>
  );
}

export default App;

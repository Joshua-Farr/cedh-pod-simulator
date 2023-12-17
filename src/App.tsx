import { CardInfoTile } from "./components/CardInfoTile";
import FooterMenu from "./components/FooterMenu";
import { SearchBar } from "./components/SearchBar";
// import { getCardImage } from "./utils/magicAPI";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid red;
  width: 50%;
`;

const ColumnsDown = styled.div`
  display: flex;
  flex-direction: columns;
  height: 100%;
  border: 2px solid pink;
`;

function App() {
  // console.log(getCardImage("Chalice of the void"));
  return (
    <div>
      <SearchBar />
      <Columns>
        <ColumnsDown>
          <CardInfoTile
            name={"Narset, Enlightened Master"}
            price={12}
            set="hello"
          />
          <CardInfoTile
            name={"Narset, Enlightened Master"}
            price={12}
            set="hello"
          />
        </ColumnsDown>
      </Columns>
      <Columns>
        <ColumnsDown>
          <CardInfoTile
            name={"Narset, Enlightened Master"}
            price={12}
            set="hello"
          />
          <CardInfoTile
            name={"Narset, Enlightened Master"}
            price={12}
            set="hello"
          />
        </ColumnsDown>
      </Columns>
      <FooterMenu />
    </div>
  );
}

export default App;

import { CardInfoTile } from "./components/CardInfoTile";
import FooterMenu from "./components/FooterMenu";
import { SearchBar } from "./components/SearchBar";
// import { getCardImage } from "./utils/magicAPI";

function App() {
  // console.log(getCardImage("Chalice of the void"));
  return (
    <div>
      <SearchBar />
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
      {/* <CardInfoTile
        name={"Narset, Enlightened Master"}
        price={12}
        set="hello"
      />
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
      <CardInfoTile
        name={"Narset, Enlightened Master"}
        price={12}
        set="hello"
      /> */}
      <FooterMenu />
    </div>
  );
}

export default App;

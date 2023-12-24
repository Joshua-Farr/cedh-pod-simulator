import * as Scry from "scryfall-sdk";

const getCardImage = async (name: string) => {
  try {
    console.log("API HAS BEEN CALLED.");
    const card = await Scry.Cards.byName(name);
    console.log("TRYING TO GET CARD IMAGE FOR: ", name);
    console.log(`HERE IS ${name}'S URL: `, card.image_uris?.png);
    return card?.image_uris?.png;
  } catch (e) {
    console.error("COULD NOT RETRIEVE IMAGE. HERE IS WHY: ", e);
  }
};

const getTinyCardImage = async (name: string) => {
  try {
    console.log("API HAS BEEN CALLED.");
    const card = await Scry.Cards.byName(name);
    console.log("TRYING TO GET CARD IMAGE FOR: ", name);
    console.log(`HERE IS ${name}'S URL: `, card.image_uris?.small);
    return card?.image_uris?.png;
  } catch (e) {
    console.error("COULD NOT RETRIEVE IMAGE. HERE IS WHY: ", e);
  }
};

export { getCardImage, getTinyCardImage };

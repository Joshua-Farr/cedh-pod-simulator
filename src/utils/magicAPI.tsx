import * as Scry from "scryfall-sdk";

const getCardData = async (name: string) => {
  try {
    return await Scry.Cards.byName(name);
  } catch (e) {
    console.error("getCardByName API REQUEST FAILED. ", e);
  }
};

const getAllCardNames = async () => {
  try {
    console.log("Requesting all card names from scryfall");

    const cardNames = await fetch(
      "https://api.scryfall.com/catalog/card-names"
    );
    console.log("this is what we fetched!", cardNames);

    return await Scry.Catalog.cardNames.name;
  } catch (e) {
    console.error(" getAllCardNames API REQUEST FAILED. ", e);
  }
  console.log("hello");
};

const getCardImage = async (name: string) => {
  try {
    const card = await Scry.Cards.byName(name);
    return card?.image_uris?.png;
  } catch (e) {
    console.error("COULD NOT RETRIEVE IMAGE. ", e);
  }
};

const getCardPrice = async (name: string) => {
  try {
    const card = await getCardData(name);
    return card?.prices.usd;
  } catch (e) {
    console.error("COULD NOT RETRIEVE CARD PRICE. ", e);
  }
};

export { getCardData, getAllCardNames, getCardImage, getCardPrice };

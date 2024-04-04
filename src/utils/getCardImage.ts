import * as Scry from "scryfall-sdk";

const getTinyCardImage = async (name: string) => {
  try {
    const card = await Scry.Cards.byName(name);
    console.log(`HERE IS ${name}'S URL: `, card.image_uris?.small);
    return card?.image_uris?.small;
  } catch (e) {
    console.error("Could not retrieve image, her's why: ", e);
  }
};

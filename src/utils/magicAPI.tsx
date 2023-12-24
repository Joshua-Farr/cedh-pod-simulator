import * as Scry from "scryfall-sdk";

//To-do: handle cases when the card is dual sided

const getCardImage = async (name: string) => {
  try {
    console.log("API has been called.");
    const card = await Scry.Cards.byName(name);
    console.log("*** HERE IS THE JSON RESPONSE: ", card);
    console.log("Trying to get card image for: ", name);
    console.log(`Here is ${name}'s URL: `, card.image_uris?.png);

    if (card.card_faces[0]) {
      return card?.card_faces[0].image_uris?.png;
    }
    return card?.image_uris?.normal;
  } catch (e) {
    console.error("Could not retrieve image, here is why: ", e);
  }
};

const getTinyCardImage = async (name: string) => {
  try {
    console.log("API HAS BEEN CALLED.");
    const card = await Scry.Cards.byName(name);
    console.log("TRYING TO GET CARD IMAGE FOR: ", name);
    console.log(`HERE IS ${name}'S URL: `, card.image_uris?.small);
    return card?.image_uris?.small;
  } catch (e) {
    console.error("Could not retrieve image, here is why: ", e);
  }
};

export { getCardImage, getTinyCardImage };

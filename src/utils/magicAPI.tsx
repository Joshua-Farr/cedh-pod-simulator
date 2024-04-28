import * as Scry from "scryfall-sdk";

//To-do: handle cases when the card is dual sided

const getCardImage = async (name: string) => {
  console.log("*** TRYING TO GET THIS CARD IMAGE IN THE API: ", name);
  setTimeout(()=>{}, 1000)
    try {
      const startTime = new Date();

      console.log("Trying to get card image for: ", name, "time request made: ", startTime.getTime );
      
        const card = await Scry.Cards.byName(name);

        const endTime = new Date();
        // console.log("*** HERE IS THE JSON RESPONSE: ", card);
        console.log(`Here is ${name}'s URL: `, card.image_uris?.png);

        console.log(`Time to complete request for ${name} was: `)
        
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
    setTimeout(()=>{}, 100)
    console.log("API HAS BEEN CALLED.");
    console.log("TRYING TO GET CARD IMAGE FOR: ", name);
    const card = await Scry.Cards.byName(name);
    console.log(`HERE IS ${name}'S URL: `, card.image_uris?.small);
    return card?.image_uris?.small;
  } catch (e) {
    console.error("Could not retrieve image, here is why: ", e);
  }
};

export { getCardImage, getTinyCardImage };

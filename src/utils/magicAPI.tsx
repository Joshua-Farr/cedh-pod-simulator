import * as Scry from "scryfall-sdk";

const requestQueue: (() => Promise<any>)[] = [];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const handleRequest = async () => {
  if (requestQueue.length > 0) {
    const nextRequest = requestQueue.shift();
    if (nextRequest) {
      await nextRequest();
    }
  }
};

const addRequestToQueue = async (request: () => Promise<any>) => {
  requestQueue.push(request);
  await delay(150);
  handleRequest();
};

const getCardImage = async (name: string) => {
  try {
    await addRequestToQueue(async () => {
      const card = await Scry.Cards.byName(name);
      console.log("Card data:", card);
      if (card.card_faces[0]) {
        return card.card_faces[0].image_uris?.png;
      } else {
        return card.image_uris?.normal;
      }
    });
  } catch (error) {
    console.error("Could not retrieve full-sized image, here is why: ", error);
  }
};

const getTinyCardImage = async (name: string) => {

  
  try {
      await addRequestToQueue(async () => {
        const card = await Scry.Cards.byName(name);
        let cardURL : string |undefined = ""
        console.log("Card data:", card);
        if(card.layout === "modal_dfc" || card.layout === "transform"){
          console.log("THIS IS A MODAL CARD")
          cardURL = card.card_faces[0].image_uris?.small;
          console.log("WHAT HE HECK ", cardURL)
        }
        console.log("Here is the URL: ",card?.image_uris?.small )
        cardURL = card?.image_uris?.small;
        return cardURL;
      }); 
    
  } catch (error) {
    console.error("Could not retrieve tiny card image, here is why: ", error);
  }
};

export { getCardImage, getTinyCardImage };
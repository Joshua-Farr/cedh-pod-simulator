import * as Scry from "scryfall-sdk";

const requestQueue: (() => Promise<any>)[] = [];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
    const cardURL = await new Promise<string | undefined>(
      async (resolve, reject) => {
        try {
          await addRequestToQueue(async () => {
            const card = await Scry.Cards.byName(name);
            let cardURL: string | undefined = "";
            if (card.layout === "modal_dfc" || card.layout === "transform") {
              cardURL = card.card_faces[0].image_uris?.normal;
            } else {
              cardURL = card?.image_uris?.normal;
            }
            resolve(cardURL);
          });
        } catch (error) {
          reject(error);
        }
      }
    );
    return cardURL;
  } catch (error) {
    console.error(
      "Could not retrieve full-sized card image, here is why: ",
      error
    );
    throw error;
  }
};

const getTinyCardImage = async (name: string) => {
  try {
    const cardURL = await new Promise<string | undefined>(
      async (resolve, reject) => {
        try {
          await addRequestToQueue(async () => {
            const card = await Scry.Cards.byName(name);
            let cardURL: string | undefined = "";
            if (card.layout === "modal_dfc" || card.layout === "transform") {
              cardURL = card.card_faces[0].image_uris?.small;
            } else {
              cardURL = card?.image_uris?.small;
            }
            resolve(cardURL);
          });
        } catch (error) {
          reject(error);
        }
      }
    );
    return cardURL;
  } catch (error) {
    console.error("Could not retrieve tiny card image, here is why: ", error);
    throw error;
  }
};

export const getAllCardImages = async (cardList: string[]) => {
  const collection = cardList.map((card) => {
    return Scry.CardIdentifier.byName(card);
  });
  const cardUrls = await Scry.Cards.collection(...collection).waitForAll();

  console.log(cardUrls);
  return cardUrls;
};

export { getCardImage, getTinyCardImage };

import { getHandOfSeven } from "./getOpeningHand";
import { getAllCardImages } from "./magicAPI";

export const fetchHand = async (decklist: string[]) => {
  const playerHand = getHandOfSeven(decklist);
  console.log(`Here is your opening hand: ${playerHand}`);

  try {
    const cards = getAllCardImages(playerHand);

    const handWithURLs: string[] = [];

    for (const card of await cards) {
      if (card.layout === "modal_dfc" || card.layout === "transform") {
        handWithURLs.push(card.card_faces[0]?.image_uris?.small || "");
      } else {
        handWithURLs.push(card?.image_uris?.small || "");
      }
    }

    return handWithURLs;
  } catch (error) {
    console.error("Error fetching hand:", error);
    throw error;
  }
};

import { formatCommanderNames } from "./formatCommanderNames";
import { getAllCardImages } from "./magicAPI";

export const getCommanderURLs = async (commanderList: string[] | string) => {
  try {
    if (!commanderList) {
      throw new Error("Commander list is empty or undefined");
    }

    const commanderArray = Array.isArray(commanderList)
      ? commanderList
      : [commanderList];

    let commanderURLS: string[] = [];

    const formattedCommanderNames = formatCommanderNames(commanderArray);

    const commanders = await getAllCardImages(formattedCommanderNames);

    for (const card of await commanders) {
      if (card && card.image_uris && card.image_uris.large) {
        commanderURLS.push(card?.image_uris?.large || "");
      }
    }

    return commanderURLS;
  } catch (error) {
    console.error("Error fetching commander from the API!: ", error);
    throw error;
  }
};

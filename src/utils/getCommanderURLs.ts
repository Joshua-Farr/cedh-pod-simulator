import { formatCommanderNames } from "./formatCommanderNames";
import { getAllCardImages, getCardImage } from "./magicAPI";

export const getCommanderURLs = async (commanderList: string[] | string) => {
  try {
    let handWithURLs: string[] | null | undefined = [];

    if (!Array.isArray(commanderList)) {
      const url = getCardImage(commanderList);
      console.log("COmmander URL", url);
      return [url];
    } else {
      const formattedCommanderNames = formatCommanderNames(commanderList);
      const commanders = await getAllCardImages(formattedCommanderNames);

      console.log(`Here are the commander URLs: ${commanders}`);

      for (const card of await commanders) {
        handWithURLs.push(card?.image_uris?.large);
      }
    }

    return handWithURLs;
  } catch (error) {
    console.error("Error fetching commander:", error);
    throw error;
  }
};

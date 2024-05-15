import { useEffect, useState } from "react";
import { getCommanderURLs } from "../utils/getCommanderURLs";
import { CommanderTile } from "./CommanderTile";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";

interface CommandersProps {
  currentCommanders: string[];
}

export const Commanders: React.FC<CommandersProps> = ({
  currentCommanders,
}) => {
  const [commanderImages, setCommanderImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async (commanders: string[]) => {
      try {
        let parsedcommanders: string[] = [];
        let commanderUrlArray: any[] = [];

        // Breaking down the commander Name array into an array of just URLs
        for (let i = 0; i < commanders.length; i++) {
          if (Array.isArray(commanders[i])) {
            for (let j = 0; j < commanders[i].length; j++) {
              parsedcommanders.push(formatNameForDisplay(commanders[i][j]));
            }
          }
          parsedcommanders.push(formatNameForDisplay(commanders[i]));
        }

        const results = await getCommanderURLs(parsedcommanders);

        // Rebuilding the array but with URLs
        for (let i = 0; i < commanders.length; i++) {
          if (Array.isArray(commanders[i])) {
            commanderUrlArray.push([results.shift(), results.shift()]);
          }
          commanderUrlArray.push(results.shift());
        }
        setLoading(false);
        setCommanderImages(commanderUrlArray);
      } catch (error) {
        console.error(`Trouble fetching commanders: `, error);
      }
    };

    fetchImages(currentCommanders);
  }, [currentCommanders]);

  const commanders = currentCommanders.map((commander: string, index) => {
    return (
      <CommanderTile
        key={commander}
        commanders={commander}
        index={index}
        listOfUrls={commanderImages}
        loading={loading}
      />
    );
  });
  return <>{commanders}</>;
};

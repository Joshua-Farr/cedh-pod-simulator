import { useEffect, useState } from "react";
import { getCommanderURLs } from "../utils/getCommanderURLs";
import { CommanderTile } from "./CommanderTile";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";

interface CommandersProps {
  currentCommanders: string[];
  loading: boolean;
  setLoading: (status: boolean) => void;
}

export const Commanders: React.FC<CommandersProps> = ({
  currentCommanders,
  setLoading,
  loading,
}) => {
  const [commanderImages, setCommanderImages] = useState<any[]>([]);

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
          } else {
            parsedcommanders.push(formatNameForDisplay(commanders[i]));
          }
        }
        console.log("Commander Names Sent: ", parsedcommanders);

        const results = await getCommanderURLs(parsedcommanders);
        console.log("Returned URL Array: ", results);
        for (let i = 0; i < commanders.length; i++) {
          if (Array.isArray(commanders[i])) {
            console.log("Now looking at this commander", commanders[i]);
            const [url1, url2] = [results.shift(), results.shift()];
            console.log([url1, url2]);
            commanderUrlArray.push([url1, url2]);
          } else {
            commanderUrlArray.push(results.shift());
          }
        }
        setCommanderImages(commanderUrlArray);
        console.log(commanderUrlArray);
      } catch (error) {
        console.error(`Trouble fetching commanders: `, error);
      }
    };

    fetchImages(currentCommanders);
    setLoading(false);
  }, [currentCommanders]);

  const commanders = currentCommanders.map((commander: string, index) => {
    const randomNumber = Math.floor(Math.random() * 10000000000);

    return (
      <CommanderTile
        key={randomNumber}
        commanders={commander}
        index={index}
        listOfUrls={commanderImages}
        loading={loading}
        setLoading={(status: boolean) => setLoading(status)}
      />
    );
  });
  return <>{commanders}</>;
};

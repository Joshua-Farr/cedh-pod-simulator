import { CommanderTile } from "./CommanderTile";

interface CommandersProps {
  currentCommanders: string[];
}

export const Commanders: React.FC<CommandersProps> = ({ currentCommanders }) => {
  const commanders = currentCommanders.map((commander: string) => {
    return <CommanderTile key={commander} name={commander} />;
  });
  return <>{commanders}</>;
};

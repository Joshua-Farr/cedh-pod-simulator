export interface Commander {
  commander: string;
  decklist: string[];
  currentCommanders: string[] | any;
  hand: string[];
}

export interface MoxField {
  deckName: string;
  numberOfCards: number;
  commander: string;
  decklist: string[];
}

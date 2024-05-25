export const getDataFromMoxfieldJSON = (data: any) => {
  console.log("Getting data from Moxfield");

  console.log("Here is the data that was passed in!", data);

  const commander = data?.main?.name;
  const decklist: string[] = getDecklistFromMoxfieldJson(data);

  return { commander, decklist };
};

const getDecklistFromMoxfieldJson = (data: any): string[] => {
  const deckArray = data.boards.mainboard.cards;
  const decklist: string[] = [""];

  deckArray.forEach((card: any) => {
    decklist.push(card.something.card.name); // This ultimately needs to be in the form of a string.
  });

  return decklist;
};

export const getOpeningHand = (decklist: string[]): string[] => {
  console.log("OPENING HAND: ", decklist);

  let tempDecklist = decklist;
  const openingHand = [];

  for (let i = 0; i < 7; i++) {
    let randomCard = Math.floor(Math.random() * tempDecklist.length);
    openingHand.push(tempDecklist[randomCard]);
    tempDecklist.splice(randomCard, 1);
  }
  return openingHand;
};

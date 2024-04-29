export const getHandOfSeven = (decklist: string[]): string[] => {
  let tempDecklist = decklist;
  const playerHand = [];

  for (let i = 0; i < 7; i++) {
    let randomCard = Math.floor(Math.random() * tempDecklist.length);
    playerHand.push(tempDecklist[randomCard]);
    tempDecklist.splice(randomCard, 1);
  }
  return playerHand;
};

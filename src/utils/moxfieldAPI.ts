export const moxFieldApi = async (deckID: string) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`http://127.0.0.1:3000/v3/decks/all/${deckID}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("Here is the API Call result: ", result))
    .catch((error) => console.error(error));
};

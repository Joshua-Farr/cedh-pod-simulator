export const moxFieldApi = async (deckID: string) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`http://localhost:8080/v3/decks/all/${deckID}`, requestOptions)
    .then((response) => response.json()) // Assuming the response is JSON
    .then((result) => console.log("Here is the API Call result: ", result))
    .catch((error) => console.error("Error: ", error));
};

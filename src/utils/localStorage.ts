import { Commander } from "../types/types";

const saveToLocalStorage = (data: Commander) => {
  window.localStorage.setItem("commanderdata", JSON.stringify(data));
  console.log("Data saved successfully to local storage");
};

const retrieveFromLocalStorage = (): Commander => {
  const data = window.localStorage.getItem("commanderdata");
  let savedData: Commander = {
    commander: "",
    decklist: [],
    currentCommanders: undefined,
    hand: [],
  };

  if (data) {
    savedData = JSON.parse(data);
  }
  console.log("Data retrieved successfully from local storage");
  const newCommanderData = { ...savedData };
  return newCommanderData;
};

export { saveToLocalStorage, retrieveFromLocalStorage };

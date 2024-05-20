import { Commander } from "../types/types";

const saveToLocalStorage = (data: object | Commander) => {
  window.localStorage.setItem("commanderdata", JSON.stringify(data));
  console.log("Data saved successfully to local storage");
};

const retrieveFromLocalStorage = () => {
  const data = window.localStorage.getItem("commanderdata");
  let savedData = "";
  if (data) {
    savedData = JSON.parse(data);
  }
  console.log("Data retrieved successfully from local storage");
  return savedData;
};

export { saveToLocalStorage, retrieveFromLocalStorage };

// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { getCardByName } from "../utils/magicAPI";

import styled from "styled-components";

export const SearchBar = () => {
  const StyledSearchBar = styled.div`
    font-size: 1rem;
    margin: 1rem 0;
  `;
  return (
    //     <Autocomplete
    //       freeSolo
    //       disableClearable
    //       options={cardNames}
    //       renderInput={(params) => (
    //         <TextField
    //           {...params}
    //           label="Search for a card"
    //           InputProps={{
    //             ...params.InputProps,
    //             type: "search",
    //           }}
    //         />
    //       )}
    //     />
    <StyledSearchBar>Search for a card:</StyledSearchBar>
  );
};

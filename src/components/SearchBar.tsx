import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  const mtgCardNames = [
    "Abjure",
    "Abnormal Endurance",
    "Aboleth Spawn",
    "Abolish",
    "Abominable Treefolk",
    "Abomination",
    "Abomination of Gudul",
    "Abomination of Llanowar",
    "Aboroth",
    "Aboshan's Desire",
    "Aboshan, Cephalid Emperor",
    "About Face",
    "Abrade",
    "Abrupt Decay",
    "Absolute Grace",
    "Absolute Law",
    "Absolver Thrull",
    "Absorb",
    "Absorb Energy",
    "Absorb Identity",
  ];

  return (
    <Autocomplete
      style={{ marginBottom: "20px", borderRadius: "50px" }}
      freeSolo
      disableClearable
      options={mtgCardNames}
      renderInput={(params: any) => (
        <TextField
          style={{ backgroundColor: "white" }}
          {...params}
          label="Search for a card"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />

    // <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    // <StyledSearchBar>Search for a card:</StyledSearchBar>
  );
};

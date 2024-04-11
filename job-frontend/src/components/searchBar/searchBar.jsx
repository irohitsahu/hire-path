//from material ui code sample
import * as React from "react";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./searchbar-styles";
import { Box } from "@mui/material";

const SearchResult = ({ text, showResult }) => {
  return;
};

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsPressed(true);
    }
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Your Dream Job"
          inputProps={{ "aria-label": "search" }}
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
        />
      </Search>
      {}
      <Box>{inputText}</Box>
    </>
  );
};

export default SearchBar;

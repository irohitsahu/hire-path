import useInput from "src/hooks/useInput";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  SearchResultBox,
} from "./searchbar-styles";

const SearchBar = () => {
  const [value, isFocused, inputProps] = useInput();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search Your Dream Job"
        inputProps={{ "aria-label": "search", ...inputProps }}
      />
      <Fade in={isFocused && (value ? true : false)} timeout={500}>
        <SearchResultBox
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          {value}
        </SearchResultBox>
      </Fade>
    </Search>
  );
};

export default SearchBar;

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.white.main, 0.75),
  width: "50%",
  "&:hover": {
    backgroundColor: alpha(theme.palette.white.main, 0.85),
  },
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "100%",
  // },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  left: 0,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(0, 0, 0, 7),
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export const SearchResultBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  minHeight: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(0, 0, 1, 1),
  padding: theme.spacing(0, 1, 0, 7),
}));

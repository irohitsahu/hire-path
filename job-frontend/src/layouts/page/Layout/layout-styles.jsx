import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutContianer = styled(Container)(() => ({
  minHeight: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative"
}));

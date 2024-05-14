import { Box, styled } from "@mui/material";

export const ComplexStatisticsCard = styled(Box)(({ theme, color }) => ({
  backgroundColor: color,
  color: color === "light" ? "dark" : "white",
  borderRadius: "xl",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "4rem",
  height: "4rem",
}));

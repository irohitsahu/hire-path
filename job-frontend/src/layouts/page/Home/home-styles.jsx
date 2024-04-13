import { Box, styled } from "@mui/material";

export const HomeWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  gap: theme.spacing(5),
  padding: theme.spacing(16, 0),
}));

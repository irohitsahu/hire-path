import { Drawer, Box, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SideNavbarDrawer = styled(Drawer)(({ ownerState }) => {
  const { miniSidenav, darkMode } = ownerState;

  const drawerOpenStyles = () => ({
    transform: "translateX(0)",
  });

  const drawerCloseStyles = () => ({
    transform: "translateX(320)",
  });

  return {
    "& .MuiDrawer-paper": {
      border: "none",
      backgroundColor: darkMode ? "#000" : "#ccc",
      padding: "1rem",

      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});

export const SideNavbarLogoLabel = styled(Box)`
  margin-left: 0.5;
  font-weight: 600;
`;

export const CollapseText = styled(ListItemText)(({ ownerState }) => {
  const { active } = ownerState;
  return {
    color: active ? "black" : "white",
  };
});

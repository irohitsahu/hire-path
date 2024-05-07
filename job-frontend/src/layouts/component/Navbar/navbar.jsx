import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import DonutIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

// context
import { useMaterialUIController } from "context";

function Navbar() {
  const [controller] = useMaterialUIController();
  const { userLogged } = controller;

  return (
    <Box
      position="absolute"
      width="100%"
      top={0}
      py={4}
      component={Container}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ color: "primary.main" }}
    >
      <Box
        component={Link}
        to="/home"
        color="inherit"
        sx={{ cursor: "pointer" }}
      >
        Job Portal
      </Box>

      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {userLogged ? (
          <>
            <Box
              color="inherit"
              component={Link}
              to="/dashboard"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <DonutIcon sx={{ mx: 1 }} fontSize="medium" />
              Dashboard
            </Box>

            <Box
              color="inherit"
              component={Link}
              to="/profile"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <PersonIcon sx={{ mx: 1 }} fontSize="medium" />
              Profile
            </Box>
          </>
        ) : (
          <>
            <Box
              color="inherit"
              component={Link}
              to="/authentication/sign-up"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <AccountCircleIcon sx={{ mx: 1 }} fontSize="medium" />
              Sign Up
            </Box>

            <Box
              color="inherit"
              component={Link}
              to="/authentication/sign-in"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <KeyIcon sx={{ mx: 1 }} fontSize="medium" />
              Sign In
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Navbar;

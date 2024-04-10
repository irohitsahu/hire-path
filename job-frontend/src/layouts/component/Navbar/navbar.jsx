import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import DonutIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

function Navbar({}) {
  return (
    <Box
      component={Container}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        component={Link}
        to="#"
        mx={1}
        p={1}
        sx={{ cursor: "pointer", color: "primary.main" }}
      >
        Job Portal
      </Box>

      <Box
        color="inherit"
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Box
          component={Link}
          to="/dashboard"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ cursor: "pointer", userSelect: "none", color: "primary.main" }}
        >
          <DonutIcon sx={{ mx: 1 }} fontSize="medium" />
          Dashboard
        </Box>

        <Box
          component={Link}
          to="/profile"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ cursor: "pointer", userSelect: "none", color: "primary.main" }}
        >
          <PersonIcon sx={{ mx: 1 }} fontSize="medium" />
          Profile
        </Box>

        <Box
          component={Link}
          to="/authentication/sign-up"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ cursor: "pointer", userSelect: "none", color: "primary.main" }}
        >
          <AccountCircleIcon sx={{ mx: 1 }} fontSize="medium" />
          Sign Up
        </Box>

        <Box
          component={Link}
          to="/authentication/sign-in"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ cursor: "pointer", userSelect: "none", color: "primary.main" }}
        >
          <KeyIcon sx={{ mx: 1 }} fontSize="medium" />
          Sign In
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;

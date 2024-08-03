// @mui material components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import DonutIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

// context
import { useMaterialUIController } from "context";
import { Link } from "react-router-dom";

function Navbar() {
  const [controller] = useMaterialUIController();
  const { userLogged, userType } = controller;

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
      <Link to="/home">Job Portal</Link>

      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {userLogged ? (
          <>
            <Link to={`${userType}/dashboard`}>
              <DonutIcon sx={{ mx: 1 }} fontSize="medium" />
              Dashboard
            </Link>

            <Link to={`${userType}/profile`}>
              <PersonIcon sx={{ mx: 1 }} fontSize="medium" />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link to="/authentication/sign-up">
              <AccountCircleIcon sx={{ mx: 1 }} fontSize="medium" />
              Sign Up
            </Link>

            <Link to="/authentication/sign-in">
              <KeyIcon sx={{ mx: 1 }} fontSize="medium" />
              Sign In
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Navbar;

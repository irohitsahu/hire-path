import { Link } from 'react-router-dom'

// @mui material components
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import DonutIcon from '@mui/icons-material/DonutLarge';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';


function Navbar({ }) {
  return (
    <Container>
      <Box
        py={1}
        px={{ xs: 4, sm: 3, lg: 2 }}
        my={3}
        mx={3}
        display="flex"
        justifyContent="space-between"
        position="absolute"
        width={"100%"}
      >
        <Box
          component={Link} to="#"
          mx={1}
          p={1}
          display="flex"
          sx={{ cursor: "pointer" }}
        >
          Job Portal
        </Box>

        <Box color="inherit" display={{ xs: "none", lg: "flex" }} mx={1} p={1} textAlign="right">
          <Box
            component={Link} to="/dashboard"
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <DonutIcon sx={{ mx: 1 }} fontSize="medium" />
            Dashboard
          </Box>

          <Box
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <Link href="/profile">
              <PersonIcon sx={{ mx: 1 }} fontSize="medium" />
              Profile
            </Link>
          </Box>

          <Box
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <Link href="/authentication/sign-up">
              <AccountCircleIcon sx={{ mx: 1 }} fontSize="medium" />
              SignUp
            </Link>
          </Box>

          <Box
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <Link href="/authentication/sign-in">
              <KeyIcon sx={{ mx: 1 }} fontSize="medium" />
              Login
            </Link>
          </Box>

        </Box>
      </Box>
    </Container >
  );
}


export default Navbar;

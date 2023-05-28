// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

import { Divider, Icon } from "@mui/material";
import DonutIcon from '@mui/icons-material/DonutLarge';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';


function Navbar({ }) {
  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: 3, lg: 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={"md"}
        color={"dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { white },
          functions: { rgba },
        }) => ({
          backgroundColor: rgba(white.main, 0.8),
          backdropFilter: `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          component={Link}
          to="/"
          mx={1}
          p={1}
          display="flex"
          alignItems="right"
          sx={{ cursor: "pointer", userSelect: "none" }}
        >
          <MDTypography fontSize="medium" variant="button" fontWeight="bold" color={"dark"}>
            Job Portal
          </MDTypography>
        </MDBox>

        <MDBox color="inherit" display={{ xs: "none", lg: "flex" }} mx={1} p={1} textAlign="right">

          <MDBox
            component={Link}
            to="/dashboard"
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <MDTypography fontSize="medium" variant="button" fontWeight="bold" color={"dark"} >
              <DonutIcon sx={{ verticalAlign: "top", mx: 1 }} fontSize="medium" /> Dashboard
            </MDTypography>
          </MDBox>
          <Divider orientation="vertical" light="false" />
          <MDBox
            component={Link}
            to="/profile"
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <MDTypography fontSize="medium" variant="button" fontWeight="bold" color={"dark"}>
              <PersonIcon sx={{ verticalAlign: "top", mx: 1 }} fontSize="medium" /> Profile
            </MDTypography>
          </MDBox>
          <Divider orientation="vertical" light="false" />
          <MDBox
            component={Link}
            to="/authentication/sign-up"
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <MDTypography fontSize="medium" variant="button" fontWeight="bold" color={"dark"}>
              <AccountCircleIcon sx={{ verticalAlign: "top", mx: 1 }} fontSize="medium" /> SignUp
            </MDTypography>
          </MDBox>
          <Divider orientation="vertical" light="false" />
          <MDBox
            component={Link}
            to="/authentication/sign-in"
            mx={1}
            p={1}
            display="flex"
            alignItems="right"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <MDTypography fontSize="medium" variant="button" fontWeight="bold" color={"dark"}>
              <KeyIcon sx={{ verticalAlign: "top", mx: 1 }} fontSize="medium" /> Login
            </MDTypography>
          </MDBox>

        </MDBox>
      </MDBox>
    </Container>
  );
}


export default Navbar;

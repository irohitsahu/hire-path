import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDInput from "../../../components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "./breadCrumbs";
import { Container } from "@mui/material";

function DashboardNavbar() {
  const route = useLocation().pathname.split("/").slice(1);

  return (
    <Container>
      <MDBox
        py={1}
        px={{ lg: 2 }}
        width="100%"
        borderRadius={25}
        shadow={"md"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={({ palette: { white }, functions: { rgba } }) => ({
          backgroundColor: rgba(white.main, 0.8),
          backdropFilter: `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox color="inherit">
          <Breadcrumbs
            alignItems="left"
            icon="home"
            title={route[route.length - 1]}
            route={route}
          />
        </MDBox>

        <MDBox xl={12} p={1} alignItems="center">
          <MDBox>
            <MDBox>
              <MDInput label="Search here" />
            </MDBox>

            <MDBox textAlign="right">
              <Link to="/profile">
                <IconButton size="large">
                  <Icon>account_circle</Icon>
                </IconButton>
              </Link>

              <IconButton size="large">
                <Icon>settings</Icon>
              </IconButton>

              <IconButton size="large">
                <Icon>notifications</Icon>
              </IconButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Container>
  );
}

export default DashboardNavbar;

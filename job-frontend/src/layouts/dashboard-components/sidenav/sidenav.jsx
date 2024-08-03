import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  List,
  Divider,
  Box,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  CollapseText,
  SideNavbarDrawer,
  SideNavbarLogoLabel,
} from "./sidenav-styles";

import { useMaterialUIController, setMiniSidenav } from "context";
import { CandidateSidebar, CompanySidebar } from "./sidenav-data";

function Sidenav() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, darkMode, userType } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  console.log(collapseName);

  let textColor = "white";

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  // it is controling the sidenav close when screen is small
  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }
    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const renderRoutes = () => {
    const routes = userType === "candidate" ? CandidateSidebar : CompanySidebar;

    return routes.map((route, index) => {
      if (route.type === "collapse") {
        return (
          <NavLink key={index} to={route.to}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{route.icon}</Avatar>
              </ListItemAvatar>
              <CollapseText
                ownerState={{
                  active: route.to === collapseName,
                }}
              >
                {route.title}
              </CollapseText>
            </ListItem>
          </NavLink>
        );
      } else if (route.type === "title") {
        return (
          <Typography
            key={route.key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {route.title}
          </Typography>
        );
      } else if (route.type === "divider") {
        return <Divider key={route.key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <SideNavbarDrawer
      variant="permanent"
      ownerState={{ miniSidenav, darkMode }}
    >
      <Box pt={3} pb={1} px={4} textAlign="center">
        <Box
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <CloseIcon />
        </Box>
        <Box
          component={NavLink}
          to="/"
          display="flex"
          alignItems="center"
          sx={{ textDecoration: "none", color: "primary.main" }}
        >
          {/* <Box component="img" src="" alt="hirepath" width="2rem" /> */}
          <SideNavbarLogoLabel ownerState={{ darkMode }}>
            <Typography
              component="h1"
              variant="button"
              fontWeight="medium"
              color={textColor}
            >
              HirePath
            </Typography>
          </SideNavbarLogoLabel>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
      <List>{renderRoutes()}</List>
    </SideNavbarDrawer>
  );
}

export default Sidenav;

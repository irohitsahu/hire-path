import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { List, Divider, Link, Box, Typography, ListItem } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

// Custom styles for the Sidenav
import {
  CollapseIcon,
  CollapseIconBox,
  CollapseItem,
  CollapseText,
  SideNavbarDrawer,
  SideNavbarLogoLabel,
} from "./sidenav-styles";

// Material Dashboard 2 React context
import { useMaterialUIController, setMiniSidenav } from "context";

function Sidenav({ brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, darkMode } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

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

  const renderRoutes = routes.map(
    ({ type, name, icon, title, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <ListItem component="li">
              <CollapseItem ownerState={key === collapseName}>
                <CollapseIconBox
                  ownerState={{ darkMode, active: key === collapseName }}
                >
                  {typeof icon === "string" ? (
                    <CollapseIcon
                      ownerState={{ darkMode, active: key === collapseName }}
                    >
                      {icon}
                    </CollapseIcon>
                  ) : (
                    icon
                  )}
                </CollapseIconBox>

                <CollapseText
                  primary={name}
                  ownerState={{
                    miniSidenav,
                    active: key === collapseName,
                  }}
                />
              </CollapseItem>
            </ListItem>
          </Link>
        ) : (
          <NavLink key={key} to={route}>
            <ListItem component="li">
              <CollapseItem ownerState={key === collapseName}>
                <CollapseIconBox
                  ownerState={{ darkMode, active: key === collapseName }}
                >
                  {typeof icon === "string" ? (
                    <CollapseIcon
                      ownerState={{ darkMode, active: key === collapseName }}
                    >
                      {icon}
                    </CollapseIcon>
                  ) : (
                    icon
                  )}
                </CollapseIconBox>

                <CollapseText
                  primary={name}
                  ownerState={{
                    miniSidenav,
                    active: key === collapseName,
                  }}
                />
              </CollapseItem>
            </ListItem>
          </NavLink>
        );
      } else if (type === "title") {
        returnValue = (
          <Typography
            key={key}
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
            {title}
          </Typography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    }
  );

  return (
    <SideNavbarDrawer
      {...rest}
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
          {brand && (
            <Box component="img" src={brand} alt="Brand" width="2rem" />
          )}
          <SideNavbarLogoLabel {...rest} ownerState={{ darkMode }}>
            <Typography
              component="h1"
              variant="button"
              fontWeight="medium"
              color={textColor}
            >
              {brandName}
            </Typography>
          </SideNavbarLogoLabel>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
      <List>{renderRoutes}</List>
    </SideNavbarDrawer>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;

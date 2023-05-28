// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// @mui material components
import List from "@mui/material/List";
import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

// Material Dashboard 2 React example components
import SidenavLayout from "./SidenavLayout";

import { Drawer } from "@mui/material";
import typography from "../../../assets/theme/base/typography";
import MDButton from "../../../components/MDButton";


function Sidenav({ brand, brandName, routes, }) {
  const { size } = typography;
  const location = useLocation();

  let textColor = "white";


  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{
            textDecoration: "none"
          }}
        >
          <SidenavLayout
            name={name}
            icon={icon}
            active={key}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavLayout name={name} icon={icon} active={key} />
        </NavLink>
      );
    }
    return returnValue;
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          color: 'white',
          background: 'linear-gradient(to left top, #000, #0073e5)',
          borderRadius: "30px",
        },
      }}
    >
      <MDBox pt={10} pb={25} px={2} textAlign="center">
        <MDBox component={NavLink} to="/" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" color={"text"} >
          {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
        </MDBox>
      </MDBox>
      <List>{renderRoutes}</List>
    </Drawer>
  );
}


export default Sidenav;

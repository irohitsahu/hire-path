// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

function Breadcrumbs({ icon, title }) {

  return (
    <MDBox textAlign="right" mr={{ xs: 0, xl: 12 }}>
      <MuiBreadcrumbs>
        <Link to="/">
          <MDTypography
            component="span"
            variant="h3"
            color="dark"
            opacity="0.5"
          >
            <Icon>{icon}</Icon>
          </MDTypography>
        </Link>
      </MuiBreadcrumbs>
      <MDTypography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h3"
        color="dark"

      >
        {title.replace("-", " ")}
      </MDTypography>
    </MDBox>
  );
}

export default Breadcrumbs;

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Box, Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";


function Breadcrumbs({ icon, title }) {

  return (
    <Box textAlign="right" mr={{ xs: 0, xl: 12 }}>
      <MuiBreadcrumbs>
        <Link to="/">
          <Typography
            component="span"
            variant="h3"
            color="dark"
            opacity="0.5"
          >
            <Icon>{icon}</Icon>
          </Typography>
        </Link>
      </MuiBreadcrumbs>
      <Typography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h3"
        color="dark"

      >
        {title.replace("-", " ")}
      </Typography>
    </Box>
  );
}

export default Breadcrumbs;

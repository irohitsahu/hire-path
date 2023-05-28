

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDButton from "../../components/MDButton";


// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../authentication/basicLayout";
import MDInput from "../../components/MDInput";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/searchBar";

function AboutUs() {
  return (
    <BasicLayout image={bgImage}>

      <Container maxWidth="xl">
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MDTypography mb={10}
            variant="h1"
            color="white"

          >
            Search Your Dream Job, Right Here, Right Now
          </MDTypography>

          <SearchBar>
            <MDInput />
          </SearchBar>

          <MDTypography variant="body1" color="white" opacity={0.8} mt={15} mb={3} >
          </MDTypography>
          <MDButton component={Link} to="/authentication/sign-up" color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            create account
          </MDButton>
          <MDTypography variant="h6" color="white" mt={8} mb={1}>
            Find us on
          </MDTypography>
          <MDBox display="flex" justifyContent="center" alignItems="center">
            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <Facebook />
            </MDTypography>
            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <Instagram />
            </MDTypography>
            <MDTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <Twitter />
            </MDTypography>
            <MDTypography component="a" variant="body1" color="white" href="#">
              <GitHub />
            </MDTypography>
          </MDBox>
        </Grid>
      </Container>
    </BasicLayout >
  );
}

export default AboutUs;

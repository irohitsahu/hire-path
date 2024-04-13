// @mui material components
import { Typography, Box, Button } from "@mui/material";
import SearchBar from "../../../components/searchBar/searchBar";

import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HomeWrapper } from "./landingInfo-styles";

function LandingPageInfo() {
  return (
    <HomeWrapper>
      <Typography variant="h2" color="white" textAlign={"center"}>
        Search Your Dream Job, Right Here, Right Now
      </Typography>

      <SearchBar />

      <Button component={Link} to="/authentication/sign-up">
        create account
      </Button>

      <Typography variant="h6" color="white">
        Find us on
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography component="a" variant="body1" color="white" href="#" mr={3}>
          <Facebook />
        </Typography>
        <Typography component="a" variant="body1" color="white" href="#" mr={3}>
          <Instagram />
        </Typography>
        <Typography component="a" variant="body1" color="white" href="#" mr={3}>
          <Twitter />
        </Typography>
        <Typography component="a" variant="body1" color="white" href="#">
          <GitHub />
        </Typography>
      </Box>
    </HomeWrapper>
  );
}

export default LandingPageInfo;

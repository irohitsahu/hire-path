// @mui material components
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import SearchBar from "../../../components/searchBar/searchBar";

import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

function LandingPageInfo() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <Typography mb={10} variant="h1" color="white">
          Search Your Dream Job, Right Here, Right Now
        </Typography>

        <SearchBar>
          <TextField />
        </SearchBar>
        <Button component={Link} to="/authentication/sign-up" mt={15} mb={3}>
          create account
        </Button>
        <Typography variant="h6" color="white" mt={8} mb={1}>
          Find us on
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            component="a"
            variant="body1"
            color="white"
            href="#"
            mr={3}
          >
            <Facebook />
          </Typography>
          <Typography
            component="a"
            variant="body1"
            color="white"
            href="#"
            mr={3}
          >
            <Instagram />
          </Typography>
          <Typography
            component="a"
            variant="body1"
            color="white"
            href="#"
            mr={3}
          >
            <Twitter />
          </Typography>
          <Typography component="a" variant="body1" color="white" href="#">
            <GitHub />
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}

export default LandingPageInfo;

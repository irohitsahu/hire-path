// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Navbar from "../component/Navbar/navbar";
import Footer from "../component/Footer/footer";

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default Layout;

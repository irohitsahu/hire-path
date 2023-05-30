// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";

// Material Dashboard 2 React example components
import Navbar from "./navbar";
import PageLayout from "./pageLayout";

// Authentication pages components
import Footer from "../../layouts/authentication/footer";

function BasicLayout({ image, children }) {
  return (
    <PageLayout>
      <Navbar />
      <Box
        position="absolute"
        width="100%"
        minHeight="100vh"
      />
      <Box px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </PageLayout>
  );
}

export default BasicLayout;

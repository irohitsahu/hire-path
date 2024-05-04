// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import InputField from "components/InputFeild/inputField";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import PageLayout from "../LayoutType/pageLayout";

function SignUp() {
  return (
    <PageLayout>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <InputField
                type="text"
                name="name"
                label="Name"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <InputField
                type="email"
                name="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <InputField
                type="password"
                name="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox display="flex" alignItems="right" ml={0.6}>
              <RadioGroup sx={{ flexDirection: "row" }} name="type">
                <FormControlLabel
                  value="candidate"
                  control={<Radio />}
                  label="Candidate"
                />
                <FormControlLabel
                  value="company"
                  control={<Radio />}
                  label="Company"
                />
              </RadioGroup>
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />

              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>

              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth>
                register
              </Button>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </PageLayout>
  );
}

export default SignUp;

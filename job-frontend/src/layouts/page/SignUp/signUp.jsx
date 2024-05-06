import { Link } from "react-router-dom";
import InputField from "components/InputFeild/inputField";

import {
  Typography,
  Box,
  Button,
  Checkbox,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PageLayout from "../LayoutType/pageLayout";
import { TopInfoCard } from "./signUp-styles";

function SignUp() {
  return (
    <PageLayout>
      <Card>
        <TopInfoCard mx={2} mt={-3} p={3} mb={1} textAlign="center">
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </Typography>
        </TopInfoCard>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form" id="signp-form">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <InputField
                type="text"
                name="name"
                label="Name"
                variant="standard"
                fullWidth
              />
              <InputField
                type="email"
                name="email"
                label="Email"
                variant="standard"
                fullWidth
              />
              <InputField
                type="password"
                name="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box display="flex" alignItems="center" justifyContent={"start"}>
              <RadioGroup name="type" row>
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
            </Box>

            <Box display="flex" alignItems="center" ml={-1}>
              <Checkbox />

              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </Typography>

              <Typography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </Typography>
            </Box>

            <Box mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth>
                register
              </Button>
            </Box>

            <Box mt={3} mb={1} textAlign="center">
              <Typography variant="button" color="text">
                Already have an account?{" "}
                <Typography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </PageLayout>
  );
}

export default SignUp;
